const Intern = require('../main/Intern')

test('testing intern class', () => {
    const intern = new Intern('Azi', 'ID-3502-22', 'azi@hotmail.com', 'STU');
    expect(intern.school).toEqual(expect.any(String))
})

test('testing school', () => {
    const intern = new Intern('Azi', 'ID-3502-22', 'azi@hotmail.com', 'STU');
    expect(intern.getSchool()).toEqual(expect.any(String));
});
test('testing role', () => {
    const intern = new Intern('Azi', 'ID-3502-22', 'azi@hotmail.com', 'STU');
    expect(intern.getSchool()).toEqual(expect.any(String))
});