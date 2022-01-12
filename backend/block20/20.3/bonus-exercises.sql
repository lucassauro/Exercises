#1
SELECT * FROM Scientists WHERE Name LIKE '%e%';
#2
SELECT * FROM Projects WHERE Code LIKE 'A%';
#3
SELECT Code, Name FROM Projects WHERE Code LIKE '%3%' ORDER BY Name;
#4
SELECT Scientist FROM AssignedTo WHERE Project LIKE 'AeH3' OR Project LIKE 'Ast3' OR Project LIKE 'Che1';
#5
SELECT * FROM Projects WHERE Hours > 500;
#6
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
#7
SELECT Name, Code FROM Projects WHERE Name NOT LIKE 'A%';
#8
SELECT Name FROM Projects WHERE Code LIKE '%H%';