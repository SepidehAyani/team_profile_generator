const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./main/Employee')
const Manager = require('./main/Manager')
const Engineer = require('./main/Engineer')
const Intern = require('./main/Intern')
const createHtml = require('./main/createHtml')
const officeTeam = []


const inputManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Managr's name is required. Please try again and enter manager's name: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Manager ID is required. Please enter manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Email is required. Please try again by entering the email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter the manager office number: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("The office number is required. Please enter manager's office number.");
                    return false;
                }
            }
        }
    ])
        .then(managerData => {
            const { name, id, email, office } = managerData;
            const manager = new Manager(name, id, email, office);
            officeTeam.push(manager);
        })
};

const inputEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Employee's name is required. Please enter employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter ID: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Employee'ID is required. Please enter employee's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Email is required. Please enter email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("School is required. Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more employees?',
            default: false
        }
    ]).then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        officeTeam.push(employee);

        if (confirmAddEmployee) {
            return inputEmployee(officeTeam);
        } else {
            return officeTeam;
        }
    })

}

const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("index.html has been successfully created.")
        }
    })
};


inputManager().then(inputEmployee).then(officeTeam => {
    return createHtml(officeTeam)

}).then(indexPage => {
    return writeFile(indexPage);
}).catch(err => {
    console.log(err);
});
