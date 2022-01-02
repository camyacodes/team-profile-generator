const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

const generateHTML = require("./src/template.js");

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
                type: 'list',
                name: 'role',
                message: "Please choose your employee's role",
                choices: ['Employee']
            },
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

            if (role === 'Employee') {
                employee = new Employee(name, id, email, role);

                console.log(employee)
            }

			teamArray.push(employee);

			if (confirmAddEmployee) {
				return addEmployee(teamArray);
			} else {
				return teamArray;
			}
		});
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 


addEmployee()
  .then(teamArray => {
      return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


  //Roles into one prompt

  