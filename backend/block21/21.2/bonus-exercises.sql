--1
SELECT m.*, bo.rating
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.rating > 8;