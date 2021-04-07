// Engineer constructor 
const Engineer = require('../lib/Engineer');

// Create Engineer object  
test('Create an Engineer object', () => {
    const engineer = new Engineer('Roberta', 51, 'Roberta.smerta@gmail', 'Robertasmerta51');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Github testing()
test('Engineer Github value', () => {
    const engineer = new Engineer('Roberta', 51, 'Roberta.smerta@gmail', 'Robertasmerta51');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Role testing() 
test('Role of Employee', () => {
    const engineer = new Engineer('Roberta', 51, 'Roberta.smerta@gmail', 'Robertasmerta51');

    expect(engineer.getRole()).toEqual("Engineer");
});