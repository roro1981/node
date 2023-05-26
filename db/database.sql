CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

create table employee(
    id int(11) NOT NULL AUTO_INCREMENT primary key,
    name varchar(45) default null,
    salary int(11) default null

)

DESCRIBE employee;

INSERT INTO employee (name,salary) VALUES
('John', 10000),
('Mary', 20000),
('Peter', 30000);