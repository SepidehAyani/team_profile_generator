const Manager = require('../main/Manager')

test('testing manager class', () => {
    const manager = new Manager('Azi', 'ID-3502-22', 'azi@hotmail.com', 'east');
    expect(manager.office).toEqual(expect.any(String))
})

test('testing office', () => {
    const manager = new Manager('Azi', 'ID-3502-22', 'azi@hotmail.com', 'east');
    expect(manager.getOffice()).toEqual(expect.any(String));
});
test('testing role', () => {
    const manager = new Manager('Azi', 'ID-3502-22', 'azi@hotmail.com', 'east');
    expect(manager.getRole()).toEqual(expect.any(String))
});