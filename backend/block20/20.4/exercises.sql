#1 
INSERT INTO Movies (title, director, year, length_minutes) VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

#2
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
(9, 6.8, 450000000, 370000000);

#3 
UPDATE Movies SET director = 'Andrew Staton' WHERE id = 9;

#4
UPDATE Movies SET title = "Ratatouille", year = 2010 WHERE id = 3;

#5
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES 
((SELECT id FROM Movies WHERE title LIKE 'Monstros SA'), 8.5, 300000000, 250000000),
((SELECT id FROM Movies WHERE title LIKE 'Os Incríveis'), 7.4, 460000000, 510000000),
((SELECT id FROM Movies WHERE title LIKE 'WALL-E'), 9.9, 290000000, 280000000);

#6
DELETE FROM BoxOffice WHERE movie_id = 11;
DELETE FROM Movies WHERE id = 11;

#7
DELETE FROM BoxOffice WHERE movie_id IN(SELECT id FROM Movies WHERE director LIKE 'Andrew Staton');
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Movies WHERE director LIKE 'Andrew Staton';