//  var fs = require('fs');
//  var inquirer = require('inquirer');
//  var jest = require('jest');

//  var Employee = require('./lib/employee');
//  var Engineer = require('./engineer');
//  var Intern = require('./intern');
//  var Manager = require('./manager');

// /*
// //create an empty file:
// fs.open('demo.html', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// */

// let emp = new Employee("Bob", "bob@bob.bob", 1);
// console.log(emp.getName() + '|' + emp.getEmail() + '|' + emp.getId()+ '|' + emp.getRole());

// let eng = new Engineer("Robert", "rob@bob.bob", 2, "robertlbuchanan");
// console.log(eng.getName() + '|' + eng.getEmail() + '|' + eng.getId()+ '|' + eng.getRole()+ '|' + eng.getGitHubUsername());

// let intern = new Intern("Brobert", "brob@bob.bob", 3, "UofM");
// console.log(intern.getName() + '|' + intern.getEmail() + '|' + intern.getId()+ '|' + intern.getRole()+ '|' + intern.getSchool());

// let man = new Manager("Broberto", "brobo@bob.bob",4 , 45);
// console.log(man.getName() + '|' + man.getEmail() + '|' + man.getId()+ '|' + man.getRole()+ '|' + man.getOfficeNum() );

// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
 const Manager = require('./lib/Manager');
 const Engineer = require('./lib/Engineer');
 const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Team Manager?'            
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Manager's ID.",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email.",            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office number",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`Adding team members`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose your Employee's Role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name of the Employee?",            
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Employee's ID.",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Employee's email.",           
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Employee's github username.",
            when: (input) => input.role === "Engineer",
           
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school attended",
            when: (input) => input.role === "Intern",
           
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more Team members?',
            default: false
        }
    ])
    .then(employeeData => {     //Employee Data//
        

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// generate HTML page function
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        
        } else {
            console.log("Your Team profile has been created. Refer to the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });