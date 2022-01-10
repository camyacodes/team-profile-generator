const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.user).toEqual(expect.any(String));
    

})

test("gets engineer's name", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');

    expect(engineer.getName()).toHaveProperty('name')
})

test("gets engineer's id", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');

    expect(engineer.getId()).toHaveProperty('id')
})

test("gets engineer's email", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');

    expect(engineer.getEmail()).toHaveProperty('email')
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');

    expect(engineer.getRole()).toEqual('Engineer')
})

test("gets engineer's github username", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com', 'myacodes');
    expect(engineer.getUser()).toHaveProperty('user')
})