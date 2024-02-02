-- to create a new database
CREATE DATABASE userdb;

-- to use database
use userdb;

-- creating a new table
CREATE TABLE user (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  password VARCHAR(50) NOT NULL
);


-- to show all tables
show userdb;

-- to describe table
describe user;