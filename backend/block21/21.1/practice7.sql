#1
SELECT active, COUNT(*) AS ativos
FROM sakila.customer
GROUP BY active;

#2
SELECT store_id, active, count(*) FROM sakila.customer
GROUP BY store_id, active;

#3 
SELECT AVG(rental_duration) AS average, rating 
FROM sakila.film
GROUP BY rating
ORDER BY average DESC;

#4
SELECT district, COUNT(*) AS Quantidade
FROM sakila.address
GROUP BY district
ORDER BY Quantidade DESC;