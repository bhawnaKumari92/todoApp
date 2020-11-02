const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos/create", async (req, res) => {
  try {
    const {title, description, state, priorities } = req.body;
    const createdAt = new Date();
    const newTodo = await pool.query(
      "INSERT INTO todo (title, description, state, priorities, createdAt) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, description, state, priorities, createdAt]
    );
//set Priority from range 0 to 9 in the priorities field
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/todos/get", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


app.get("/todos/search/:searchParams", async (req, res) => {
  try {
    const {searchParams} = req.params
    const result = await pool.query("SELECT * FROM todo WHERE description = $1 OR title = $1", [
      searchParams
    ]);
    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
