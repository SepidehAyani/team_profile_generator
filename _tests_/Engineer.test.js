const Engineer = require('../main/Engineer')

test('testing engineer class', () => {
    const engineer = new Engineer('Azi', 'ID-3502-22', 'azi@hotmail.com', 'MN');
    expect(engineer.github).toEqual(expect.any(String))
})

test('testing github', () => {
    const engineer = new Engineer('Azi', 'ID-3502-22', 'azi@hotmail.com', 'MN');
    expect(engineer.getGihub()).toEqual(expect.any(String));
});
test('testing role', () => {
    const engineer = new Engineer('Azi', 'ID-3502-22', 'azi@hotmail.com', 'MN');
    expect(engineer.getRole()).toEqual(expect.any(String))
});