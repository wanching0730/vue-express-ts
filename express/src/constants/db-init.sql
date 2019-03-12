create database sampleApp;
use sampleApp;

create table subscribers(
    subscriberId int auto_increment primary key,
    name text not null,
    email text not null,
    createdAt datetime,
    updatedAt datetime
);