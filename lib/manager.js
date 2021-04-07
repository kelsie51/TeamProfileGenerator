const Employee = require('./employee');
class Manager extends Employee {
        constructor(empName,email,id, officeNumber) {
            super(empName, email, id);
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
