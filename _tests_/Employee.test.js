const Employee = require('../main/Employee')

test('testing employee class ', () => {
    const employee = new Employee('Azi', 'ID-3502-22', 'azi@hotmail.com');
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String));
})

test('testing employee name', () => {
    const employee = new Employee('Azi', 'ID-3502-22', 'azi@hotmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('testing employee id', () => {
    const employee = new Employee('Azi', 'ID-3502-22', 'azi@hotmail.com');
    expect(employee.getID()).toEqual(expect.any(String));
});
test('testing email', () => {
    const employee = new Employee('Azi', 'ID-3502-22', 'azi@hotmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String))
});