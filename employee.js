class Employee {
    role="Employee";
    constructor(empName,email,id) {
        this.empName = empName;
        this.email = email;
        this.id = id;
        
    }
    getName() {
        return this.empName;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;
