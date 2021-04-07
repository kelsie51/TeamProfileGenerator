// Engineer constructor 
const Intern = require('../lib/Intern');

// Create Intern object  
test('Create an intern object', () => {
    const intern = new Intern('Roberta', 'Roberta.smerta@gmail', 51,  'U of M');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// School testing()
test('intern school value', () => {
    const intern = new Intern('Roberta', 'Roberta.smerta@gmail', 51,  'U of M');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Role testing() 
test('Role of the Employee', () => {
    const intern = new Intern('Roberta', 'Roberta.smerta@gmail', 51,  'U of M');

    expect(intern.getRole()).toEqual("Intern");
});