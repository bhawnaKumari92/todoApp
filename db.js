const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "SYSTEM",
  host: "localhost",
  port: 5432,
  database: "todo"
});

module.exports = pool;
