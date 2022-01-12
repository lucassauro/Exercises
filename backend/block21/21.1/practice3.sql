#1
SELECT IF(16 MOD 2 = 0, 'par', 'impar') AS 'Par ou Ímpar';
#2
SELECT 220 DIV 12 AS Resposta;
#3
SELECT IF(220 MOD 12 = 0, 'Não', CONCAT('SIM, ', 220 MOD 12)) AS Resposta;