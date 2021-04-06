class Manager extends Employee {
        constructor(empName,email,id) {
        super(empName);
        super(email);
        super(id);
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
