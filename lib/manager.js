const Employee = require('./employee');
class Manager extends Employee {
        constructor(name,email,id, officeNumber) {
            super(name, email, id);
            this.officeNumber=officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNum() {
        return this.officeNumber;
    }
}

module.exports = Manager;
