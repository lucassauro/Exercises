SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor ORDER BY last_name;
SELECT last_name, first_name FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
SELECT * FROM sakila.language LIMIT 10 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length ASC, replacement_cost DESC LIMIT 20;