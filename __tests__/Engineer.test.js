const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    

})

test("gets engineer's name", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com');

    expect(engineer.getName()).toHaveProperty('name')
})

test("gets engineer's id", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com');

    expect(engineer.getId()).toHaveProperty('id')
})

test("gets engineer's email", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com');

    expect(engineer.getEmail()).toHaveProperty('email')
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Mya', 5, 'code@code.com');

    expect(engineer.getRole()).toEqual('Engineer')
})