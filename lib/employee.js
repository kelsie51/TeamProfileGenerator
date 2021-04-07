class Employee {
    role="Employee";
    constructor(name,email,id) {
        this.name = name;
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
