const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

// const generateHTML = require("./src/generateHTML");

const teamArray = [];

const addEmployee = () => {
	console.log(`
    =================
    Adding employees to the team
    =================
    `);

	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What's the name of the employee?",
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the employee's ID.",
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the employee's email.",
			},
			{
				type: "confirm",
				name: "confirmAddEmployee",
				message: "Would you like to add more team members?",
				default: false,
			},
		])
		.then((employeeData) => {
			// data for employee types

			let { name, id, email, role, confirmAddEmployee } = employeeData;
			let employee;

			employee = new Employee(name, id, email, role);

			teamArray.push(employee);

			if (confirmAddEmployee) {
				return addEmployee(teamArray);
			} else {
				return teamArray;
			}
		});
};

addEmployee()
  .then(teamArray => {
    console.log(teamArray)
  })
  .catch(err => {
 console.log(err);
  });
