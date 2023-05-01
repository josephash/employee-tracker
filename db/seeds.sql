USE employee_db;

INSERT INTO department (name)
VALUES ("Sales Floor"),
	   ("Consulting");

INSERT INTO role (title, salary, department_id)
VALUES ("Advisor", 40000, 1),
	   ("Specialist", 50000, 1),
	   ("Consultant", 75000, 2),
	   ("Senior Consultant", 95000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Schmichael", 1, 3),
	   ("Pete", "Thomas", 1, 3),
	   ("Daniel", "Smith", 1, 8),
	   ("Rosaleen", "Lane", 2, 3),
	   ("John", "Peterson", 3, 8),
	   ("Benson", "London", 3, 8),
	   ("Kevan", "Rowe", 4, 8),
	   ("Kimberley", "Linton", 4);