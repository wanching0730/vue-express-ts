create database sampleApp;
use sampleApp;

create table User(
    userId int auto_increment primary key,
    name text not null,
    email text not null
);