const { expect } = require('@jest/globals');
const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    

})

test("gets intern's name", () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');

    expect(intern.getName()).toHaveProperty('name')
})

test("gets intern's id", () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');

    expect(intern.getId()).toHaveProperty('id')
})

test("gets intern's email", () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');

    expect(intern.getEmail()).toHaveProperty('email')
})

test("gets intern's role", () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');

    expect(intern.getRole()).toEqual('Intern')
})

test("gets intern's school", () => {
    const intern = new Intern('Mya', 5, 'code@code.com', 'MIT');
    expect(intern.getSchool()).toHaveProperty('school')
})