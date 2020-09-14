
INSERT INTO department (id, name)
VALUES 
(1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4, "Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", "100000", 1),
("Salesperson", "80000", 1),
("Lead Engineer", "150000", 2),
("Software Engineer", "120000", 2),
("Account Manager", "130000", 1),
("Accountant", "125000", 4),
("Legal Team Lead", "250000", 3);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
("Mike", "Chan", 1, NULL),
("Ashley", "Rodriguez", 3, 2),
("Kevin", "Tupik", 2, 3),
("Talia", "Brown", 7, 3),
("Malia", "Brown", 1, 3);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;