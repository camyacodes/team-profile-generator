function Employee(name= '') {

    this.name = name;
    this.id = 5;
    this.email = 'code';
}

Employee.prototype.getName = function () {
    return {
        name: this.name
    }
}

module.exports = Employee;