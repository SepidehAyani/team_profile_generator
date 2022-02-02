const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return `Manager`;
    }

    getOffice() {
        return `${this.office}`
    }

    inttroduceSelf() {
        console.log(`The manager is named ${this.name}, with ID: ${this.id} and an office at ${this.office}`)
    }
}

module.exports = Manager;