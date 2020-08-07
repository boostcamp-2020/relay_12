CREATE DATABASE IF NOT EXISTS relay12_db;

USE relay12_db;

CREATE TABLE user (
  id INT(40) NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL);
  
CREATE TABLE board (
  id INT(40) NOT NULL auto_increment PRIMARY KEY ,
  title varchar(100) NOT NULL,
  body TEXT,
  createAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT(40) NOT NULL,
  isChat boolean default false);

ALTER TABLE BOARD
ADD CONSTRAINT userID
FOREIGN KEY (userId)
REFERENCES user(id)
ON DELETE CASCADE;

INSERT INTO user values(0, 'admin');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';