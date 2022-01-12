
SELECT * FROM customer WHERE email LIKE 'LEONARD.SCHOFIELD%';

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo', store_id, `active` FROM customer 
WHERE active = 0 AND store_id = 2 AND first_name NOT LIKE 'Kenneth' ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating LIKE 'G' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC LIMIT 100;

SELECT COUNT(*) AS 'Quantidade de Clientes ativos' FROM customer WHERE active <> 0 AND store_id = 1; # 318

SELECT * FROM customer WHERE active <> 1 AND store_id = 1;

SELECT title FROM film WHERE rating LIKE 'NC-17' ORDER BY rental_rate, title LIMIT 50;