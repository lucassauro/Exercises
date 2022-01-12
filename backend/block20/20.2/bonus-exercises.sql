SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
SELECT Piece, Price FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
SELECT COUNT(Piece) FROM Provides WHERE Piece = 1;
SELECT COUNT(Provider) FROM Provides WHERE Piece = 1;