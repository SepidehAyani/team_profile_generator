class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}, my email is ${this.email} and my ID is ${this.id} `)
    }

    getName() {
        return `${this.name}`
    }

    getID() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }

    getRole() {
        return `Employee`
    }
}
module.exports = Employee;