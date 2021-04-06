var fs = require('fs');
var inquirer = require('inquirer');
var jest = require('jest');

var Employee = require('./employee');
/*var Engineer = require('./engineer');
var Intern = require('./intern');
var Manager = require('./manager');*/

/*
//create an empty file:
fs.open('demo.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/

let emp = new Employee("Bob", "bob@bob.bob", 1);
console.log(emp.getName() + '|' + emp.getEmail() + '|' + emp.getId()+ '|' + emp.getRole());

/*let eng = new Engineer("Robert", "rob@bob.bob", 1);
console.log(eng.getName() + '|' + eng.getEmail() + '|' + eng.getId()+ '|' + eng.getRole());*/
