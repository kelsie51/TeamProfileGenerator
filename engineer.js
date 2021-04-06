var empl = require('./employee');

class Engineer extends Employee {    
    constructor(empName,email,id) {
        super(empName);
        super(email);
        super(id);
    }
    getRole() {
        return "Engineer";
    }
    
}

module.exports = Engineer;

