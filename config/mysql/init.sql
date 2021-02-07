create user 'dev' identified by 'password';
grant all on gollum.* to dev;
create user 'test' identified by 'password';
grant all on test_gollum.* to test;
create database if not exists gollum;
create database if not exists test_gollum;
