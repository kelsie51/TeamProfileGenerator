const Employee = require('./employee');

class Engineer extends Employee {    
    constructor(name,email,id, githubUsername) {
        super(name, email, id);
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

