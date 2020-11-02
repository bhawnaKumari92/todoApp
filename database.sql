CREATE DATABASE todoapp;

CREATE TABLE todo(
  todo_id BIGSERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(300),
  priorities INT(1),
  createdAt date,
  state Boolean
);