#1
SELECT MAX(SALARY) FROM hr.employees;
#2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
#3
SELECT AVG(SALARY) AS average FROM hr.employees
GROUP BY JOB_ID
ORDER BY average DESC;
#4
SELECT SUM(SALARY) AS total FROM hr.employees;
#5
SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;
#6
SELECT JOB_ID, COUNT(*) FROM hr.employees;
#7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;
#8
SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID LIKE 'IT_PROG';
#9
SELECT AVG(SALARY) AS Average, COUNT(*) FROM hr.employees
WHERE JOB_ID NOT LIKE 'IT_PROG'
GROUP BY SALARY
ORDER BY SALARY DESC;
#10


