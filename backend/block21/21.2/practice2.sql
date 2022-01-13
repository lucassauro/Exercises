--1
SELECT CONCAT(e.first_name, ' ', e.last_name), CONCAT(m.first_name, ' ', m.last_name)
FROM hr.employees AS e
JOIN hr.employees AS m
ON e.MANAGER_ID = m.EMPLOYEE_ID
WHERE e.DEPARTMENT_ID <> m.DEPARTMENT_ID

--2 
SELECT CONCAT(e.first_name, ' ', e.last_name) AS Nome, COUNT(m.MANAGER_ID)
FROM hr.employees AS e
JOIN hr.employees AS m
ON m.MANAGER_ID = e.EMPLOYEE_ID
GROUP BY Nome;

-- SELECT
--     CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
--     COUNT(*)
-- FROM
--     employees AS Manager
-- INNER JOIN
--     employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
-- GROUP BY
--     Manager.EMPLOYEE_ID;