--1
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id;

--2
SELECT m.title, (bo.domestic_sales + bo.international_sales) AS Vendas
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

--3
SELECT m.title, bo.rating AS Avaliação
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

--4
SELECT t.*, m.*
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

--5
SELECT m.*, t.*
FROM Pixar.Movies AS m
RIGHT JOIN Pixar.Theater AS t
ON m.theater_id = t.id
ORDER BY t.name;
