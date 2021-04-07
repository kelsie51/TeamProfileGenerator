const Employee = require('./employee');
class Intern extends Employee {
    role = "Intern";
    constructor(name,email,id,school) {
        super(name, email, id);
        this.school=school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
