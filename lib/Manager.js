function Manager(name, id, email) {

    this.name = name;
    this.id = id;
    this.email = email;
}

Manager.prototype.getName = function () {
    return {
        name: this.name
    }
}

Manager.prototype.getId = function () {
    return {
        id: this.id
    }
}

Manager.prototype.getEmail = function () {
    return {
        email: this.email
    }
}

Manager.prototype.getRole = function () {
    return 'Manager';
}


module.exports = Manager;