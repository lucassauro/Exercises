#8
UPDATE BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;

#9
UPDATE BoxOffice SET rating = 6.0 WHERE domestic_sales > 200000000 AND international_sales < 300000000;

#10
SELECT id, length_minutes FROM Pixar.Movies; //manualmente verificar os ids de filmes que possuem mais de 100min.
DELETE FROM BoxOffice WHERE movie_id IN (1,6,7,8);
DELETE FROM Pixar.Movies WHERE length_minutes < 100;
