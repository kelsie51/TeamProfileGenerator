// Manager constructor 
const Manager = require('../lib/Manager');

// Created Manager object  
test('Create a Manager object', () => {
    const manager = new Manager('Roberta','roberta.smerta@aol', 51, 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Role testing 
test('Role of the employee', () => {
    const manager = new Manager('Roberta', 'roberta.smerta@aol.com', 51, 4);

    expect(manager.getRole()).toEqual("Manager");
}); 