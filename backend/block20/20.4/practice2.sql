#1
UPDATE actor SET first_name = 'JULES' WHERE first_name LIKE 'JULIA';

#2
UPDATE category SET name = 'Science Fiction' WHERE name LIKE 'Sci-Fi';

#3
UPDATE film SET rental_rate = 25.00 WHERE length > 100 AND
rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20.00;

#4
UPDATE film
SET rental_rate = (
CASE length WHEN length < 100 THEN 10.00
						WHEN length >= 100 THEN 20.00
			      ELSE rental_rate
END);
