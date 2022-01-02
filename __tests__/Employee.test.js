const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mya');

    expect(employee.name).toBe('Mya');
    expect(employee.id).toBe(5);
    expect(employee.email).toBe('code');

})

test("gets employee's name", () => {
    const employee = new Employee('Mya');

    expect(employee.getName()).toHaveProperty('name', 'Mya')
})

// test("gets employee's id", () => {
//     const employee = new Employee('Mya');

//     expect(employee.getId()).toHaveProperty('id', 5)
// })