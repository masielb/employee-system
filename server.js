const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// PORT
var PORT = process.env.PORT || 8080;

// My SQL connection
var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "employeeTracker"
});

// Initiate MySQL connection
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connect as id" + connection.threadID);
});

// Function to validate first and last name in CLI open-input fields
const responseValidation = function (input) {
    if (input === "") {
        console.log("This parameter cannot be empty!");
        return false;
    }
    return true;
};

// Function to begin application
function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "begin",
            choices: ["View All Employees","Add Employee", "Update Employee Roles"]
        }
    ]).then(answer => {
        if (answer.begin === "View All Employees") {
            viewAll();
        } else if (answer.begin === "Add Employee") {
            addEmployee();
        } else if (answer.begin === "Update Employee Roles") {
            updateEmployeeRole();
        }
    });
};

// Function to view all employees stored in database
function viewAll() {
    var query = "SELECT * FROM employee ORDER BY id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        console.log(table);
        start();
    })
};

// function viewAllByDepart() { };

// function viewAllByManager() { };

// Function to add employee to database
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName",
            validate: responseValidation
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName",
            validate: responseValidation
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Mannager", "Accountant", "Legal Team Lead"]
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            name: "managerName",
            choices: ["None", ]
        }
    ]).then(answers => {

    });
};

// function removeEmployee() { };

// Function to update an employee's role within database
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee would you like to update?",
            name: "employee",
            choices: []
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: []
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            name: "managerName",
            choices: []
        }
    ]).then(answers => {
    });
};

// Function to update employee's mananger
function updateEmployeeManager() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee's manager do you want to update?",
            name: "managers",
            choices: []
        },
        {
            type: "list",
            message: "Which employee do you want to set as manager for the select employee?",
            name: "manager",
            choices: []
        }
    ]).then(answers => {
        start();
    });
};

start();
// function viewAllRoles() { };

// function addRole() { };

// function removeRole() { };

// app.listen(PORT, () => {
//     console.log("Server listening on: http://localhost:" + PORT);
// });
