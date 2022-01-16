-- 1
SELECT rating, AVG(length)
  FROM sakila.film
  GROUP BY rating;
-- 2
SELECT rating, SUM(replacement_cost)
  FROM sakila.film
  GROUP by rating;