const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Mya', 5, 'code@code.com', 1111111111);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets manager's name", () => {
    const manager = new Manager('Mya', 5, 'code@code.com');

    expect(manager.getName()).toHaveProperty('name')
})

test("gets manager's id", () => {
    const manager = new Manager('Mya', 5, 'code@code.com');

    expect(manager.getId()).toHaveProperty('id')
})

test("gets manager's email", () => {
    const manager = new Manager('Mya', 5, 'code@code.com');

    expect(manager.getEmail()).toHaveProperty('email')
})

test("gets manager's Office number", () => {
    const manager = new Manager('Mya', 5, 'code@code.com');

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber')
})

test("gets manager's role", () => {
    const manager = new Manager('Mya', 5, 'code@code.com');

    expect(manager.getRole()).toEqual('Manager')
})
