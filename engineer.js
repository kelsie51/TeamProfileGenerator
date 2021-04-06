const Employee = require('./employee');

class Engineer extends Employee {    
    constructor(empName,email,id, githubUsername) {
        super(empName, email, id);
        this.githubUsername = githubUsername;
       
    }
    getRole() {
        return "Engineer";
    }
    getGitHubUsername() {
        return this.githubUsername;
    }
    
}

module.exports = Engineer;

