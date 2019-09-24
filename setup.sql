CREATE ROLE reflections WITH LOGIN PASSWORD 'reflections';
ALTER ROLE reflections WITH SUPERUSER;

CREATE DATABASE reflections;
\c reflections
