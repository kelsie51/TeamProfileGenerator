var fs = require('fs');
var inquirer = require('inquirer');
var jest = require('jest')

//create an empty file:
fs.open('demo.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});