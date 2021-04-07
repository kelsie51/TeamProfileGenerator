// Engineer constructor 
const Engineer = require('../lib/Engineer');

// Create Engineer object  
test('Create an Engineer object', () => {
    const engineer = new Engineer('Roberta', 'Roberta.smerta@gmail', 51,  'Robertasmerta51');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Github testing()
test('Engineer Github value', () => {
    const engineer = new Engineer('Roberta', 'Roberta.smerta@gmail', 51, 'Robertasmerta51');

    expect(engineer.getGitHubUsername()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Role testing() 
test('Role of Employee', () => {
    const engineer = new Engineer('Roberta', 'Roberta.smerta@gmail', 51, 'Robertasmerta51');

    expect(engineer.getRole()).toEqual("Engineer");
});