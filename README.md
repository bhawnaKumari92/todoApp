## TODO APP

To run the project.

Run command ` npm install` to install the dependencies.

After that run the command `npm run start` or in the package json you will get the `debug` option, you can also click to run the app.

<br><br>

## DATABASE SCHEMA:

  `todo_id` PRIMARY KEY : Value will increment automatically with each creation of the task

  `title` VARCHAR(100) : Title of the task 

  `description` VARCHAR(300) : Descriptions of the task

  `priorities` INT(1) : Priorities of the task. High value will appear on top, it ranges from 0 to 9.

  `createdAt` date : Date and time of the creation of the task.

  `state` Boolean : If the task has been done then mark true otherwise false.


<br><br>

## The API for this app are following

POST ROUTE:  `localhost:5000/todos/create`  For creating Todo task

GET ROUTE:  `localhost:5000/todos/get`    For fetching all the todo task from the database

PUT ROUTE:  `localhost:5000/todos/update/:id`   For updating the particular todo task using id.

DELETE ROUTE:  `localhost:5000/todos/delete/:id`  For deleting the particular todo task using id.

GET ROUTE:  `localhost:5000/todos/get/:id`   For fetching the particular todo task using id.

SEARCH ROUTE: `localhost:5000/todos/search/:searchParams`   For searching using title and description of the todo task. It will display all matching results.

<BR><BR><BR>
### CREATED BY `BHAWANA SINGH`
