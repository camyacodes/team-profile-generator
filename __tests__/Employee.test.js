const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mya', 5, 'code@code.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

test("gets employee's name", () => {
    const employee = new Employee('Mya', 5, 'code@code.com');

    expect(employee.getName()).toHaveProperty('name')
})

test("gets employee's id", () => {
    const employee = new Employee('Mya', 5, 'code@code.com');

    expect(employee.getId()).toHaveProperty('id')
})

test("gets employee's email", () => {
    const employee = new Employee('Mya', 5, 'code@code.com');

    expect(employee.getEmail()).toHaveProperty('email')
})

test("gets employee's role", () => {
    const employee = new Employee('Mya', 5, 'code@code.com');

    expect(employee.getRole()).toEqual('Employee')
})