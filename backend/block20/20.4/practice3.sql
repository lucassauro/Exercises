#1
DELETE FROM film_actor WHERE actor_id = 12;
DELETE FROM actor WHERE first_name LIKE 'KARL';
#2
DELETE FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE first_name LIKE 'MATTHEW');
DELETE FROM actor WHERE first_name LIKE 'MATTHEW';
#3
DELETE FROM film_text WHERE description LIKE '%saga%';
#4
DELETE FROM film_actor;
DELETE FROM film_category;