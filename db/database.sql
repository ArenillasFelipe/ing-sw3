create database if not exists employeesdb;
use employeesdb;

create table if not exists employees(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) DEFAULT NULL,
    salary FLOAT DEFAULT NULL,
    primary key(id);
);