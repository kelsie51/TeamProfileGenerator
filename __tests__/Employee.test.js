
const Employee = require('../lib/Employee');

// Created an employee object 
test('create Employee object', () => {
    const employee = new Employee('Roberta', 51, 'roberta.smerta@aol.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Employee name testing 
test('get Employee name', () => {
    const employee = new Employee('Roberta', 51, 'roberta.smerta@aol.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Id testing 
test('get Employee ID', () => {
    const employee = new Employee('Roberta', 51, 'roberta.smerta@aol.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// email testing
test('get Employee email', () => {
    const employee = new Employee('Roberta', 51, 'Roberta.smerta@aol.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Role testing
test('get Employee Role', () => {
    const employee = new Employee('Roberta', 90, 'roberta.smerta@aol.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

