class Intern extends Employee {
    role = "Intern";
    constructor(empName,email,id,school) {
        super(empName);
        super(email);
        super(id);
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
