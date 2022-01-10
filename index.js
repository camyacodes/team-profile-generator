const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const generateHTML = require("./src/template.js");

const teamArray = [];

const addTeamMember = () => {
	console.log(`
    =================
    Adding employees to the team
    =================
    `);
// test commit
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Please choose your Team member's role",
                choices: ['Employee', 'Manager', 'Engineer', 'Intern']
            },
            {
                type: "input",
                name: "name",
                message: "What's the name of the team member?",
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the team member's ID.",
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the team member's email.",
            },
            {
                type: "input",
                name: "officeNumber",
                when: (input) => input.role === "Manager",
                message: "Please enter the manager's office number"
            },
            {
                type: "input",
                name: "user",
                when: (input) => input.role === "Engineer",
                message: "Please enter the engineer's github username"
            },
            {
                type: "input",
                name: "school",
                when: (input) => input.role === "Intern",
                message: "Please enter the intern's school"
            },
			{
				type: "confirm",
				name: "confirmAddTeamMember",
				message: "Would you like to add more team members?",
				default: false,
            },
		])
		.then((teamMemberData) => {
			// data for employee types

			let { name, id, email, officeNumber, role, user, school, confirmAddTeamMember } = teamMemberData;
			let teamMember;

            if (role === 'Employee') {

                teamMember = new Employee(name, id, email, role);

            } else if (role === "Manager") {

                teamMember = new Manager(name, id, email, officeNumber, role);
                
            }
            
            if (role === "Engineer") {

                teamMember = new Engineer(name, id, email, user);

            }

            if (role === "Intern") {

                teamMember = new Intern(name, id, email, school);

            }

			teamArray.push(teamMember);

			if (confirmAddTeamMember) {
				return addTeamMember(teamArray);
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


addTeamMember()
    .then(teamArray => {
      console.log(teamArray)
      return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


  