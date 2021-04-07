var fs = require('fs');
var inquirer = require('inquirer');
var jest = require('jest');

var Employee = require('./lib/employee');
var Engineer = require('./engineer');
var Intern = require('./intern');
var Manager = require('./manager');

/*
//create an empty file:
fs.open('demo.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/

let emp = new Employee("Bob", "bob@bob.bob", 1);
console.log(emp.getName() + '|' + emp.getEmail() + '|' + emp.getId()+ '|' + emp.getRole());

let eng = new Engineer("Robert", "rob@bob.bob", 2, "robertlbuchanan");
console.log(eng.getName() + '|' + eng.getEmail() + '|' + eng.getId()+ '|' + eng.getRole()+ '|' + eng.getGitHubUsername());

let intern = new Intern("Brobert", "brob@bob.bob", 3, "UofM");
console.log(intern.getName() + '|' + intern.getEmail() + '|' + intern.getId()+ '|' + intern.getRole()+ '|' + intern.getSchool());

let man = new Manager("Broberto", "brobo@bob.bob",4 , 45);
console.log(man.getName() + '|' + man.getEmail() + '|' + man.getId()+ '|' + man.getRole()+ '|' + man.getOfficeNum() );
