DROP DATABASE IF EXISTS similarProducts;

CREATE DATABASE similarProducts;

USE similarProducts;

CREATE TABLE products (
id int NOT NULL AUTO_INCREMENT,
url text,
name text NOT NULL,
rating int,
reviews int NOT NULL,
price real NOT NULL,
isPrime boolean NOT NULL
);

INSERT INTO products (url, name, rating, reviews, price, isPrime)
VALUES ('link', 'Mouse', 5, 100, 1.50, true)