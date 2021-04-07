
const Employee = require('../lib/Employee');

// Created an employee object 
test('create Employee object', () => {
    const employee = new Employee('Roberta','roberta.smerta@aol.com', 51);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Employee name testing 
test('get Employee name', () => {
    const employee = new Employee('Roberta','roberta.smerta@aol.com', 51 );

    expect(employee.getName()).toEqual(expect.any(String));
});

// Id testing 
test('get Employee ID', () => {
    const employee = new Employee('Roberta','roberta.smerta@aol.com', 51 );

    expect(employee.getId()).toEqual(expect.any(Number));
});

// email testing
test('get Employee email', () => {
    const employee = new Employee('Roberta', 'Roberta.smerta@aol.com', 51 );

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Role testing
test('get Employee Role', () => {
    const employee = new Employee('Roberta', 'roberta.smerta@aol.com',90);

    expect(employee.getRole()).toEqual("Employee");
}); 

