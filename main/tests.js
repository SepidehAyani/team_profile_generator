const Employee = require('./Employee.js')
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer')

const newPerson = new Employee('Azi', 'ID-3502-22', 'azi@hotmail.com');
const newIntern = new Intern('Azi', 'ID-3502-22', 'azi@hotmail.com', 'STU');;
const newManager = new Manager('Andie', 'ID-3333-22', 'andie@hotmail.com', 'Minneapolis');;
const newEngineer = new Engineer('Sepid', 'ID-4444-22', 'github.com/SepidehAyani','DataEngineer')

newPerson.introduceSelf();
newIntern.introduceSelf();
newEngineer.introduceSelf();
newManager.inttroduceSelf();