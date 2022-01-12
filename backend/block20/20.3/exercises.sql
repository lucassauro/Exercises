#1
SELECT * FROM Pecas WHERE name LIKE 'gr%';
#2
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
#3
SELECT peca, preco, fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%n%';
#4
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;
#5
SELECT COUNT(*) FROM Fornecedores WHERE code LIKE '%f%';
#6
SELECT * FROM Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco;
#7
SELECT COUNT(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';