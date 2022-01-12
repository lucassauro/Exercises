#1
SELECT * FROM rental WHERE DATE(return_date) = '2005-05-25';

#2
SELECT COUNT(payment_date) FROM payment WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

#3
SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) 
FROM rentalWHERE rental_id = 10330;

#4
SELECT * FROM payment WHERE payment_date LIKE '2005-07-28 22:%';