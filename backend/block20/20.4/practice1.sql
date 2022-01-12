#1
USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Lucas', 'Teixeira', 3, 'lucas@email.com', 1, 1, 'lucas', 1234);

#2
INSERT INTO staff(first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Lucão', 'Teixeirinha', 4, NULL, 2, 1, 'Lucão', SHA1('1234')),
('Luquinhas', 'Teixeirão', 3, NULL, 1, 1, 'Luquinhas', SHA1('12345'));

#3
INSERT INTO actor (first_name, last_name)
	SELECT customer.first_name, customer.last_name
   FROM customer
   LIMIT 5;

#4
INSERT INTO category (name) VALUES
('Romance'),
('Comic'),
('Another');

#5
INSERT INTO store (manager_staff_id, address_id) VALUES
(3, 1);