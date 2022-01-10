function Engineer(name, id, email, user) {

    this.name = name;
    this.id = id;
    this.email = email;
    this.user = user
}

Engineer.prototype.getName = function () {
    return {
        name: this.name
    }
}

Engineer.prototype.getId = function () {
    return {
        id: this.id
    }
}

Engineer.prototype.getEmail = function () {
    return {
        email: this.email
    }
}

Engineer.prototype.getRole = function () {
    return 'Engineer';
}

Engineer.prototype.getUser = function () {
    return {
        user: this.user
    }
}

module.exports = Engineer;