// generate HTML format from intern click on indexJS option.  Must module.exports.
// child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
// intern is an 'extend' of employee
// intern needs 'school', getSchool(), getRole() overrides employee.
const jest = require('jest')

// Pulls from lib folder employee & Intern classs.
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// test variable for passing test below, includes Intern specific School.
const nameIntern = new Intern('Krim', '42', 'finalFantasy@gamil.com', 'Garlemald University')

// start of test running Intern extended/sub class.  
// needs Arrange and Act, only Asert below?
describe("employee class", () => {
  describe("Employee class methods", () => {
    if("gets name", () => {
      expect(nameIntern.getName()).toBe('Krim');
    });
    if("gets id", () => {
      expect(nameIntern.getId()).toBe("42");
    });
    if("gets email", () => {
      expect(nameIntern.getEmail()).toBe('finalFantasy@gamil.com');
    });
    if("gets school", () => {
      expect(nameIntern.getSchool()).toBe('Garlemald University');
    });
    if("gets role", () => {
      expect(nameIntern.getRole()).toBe('Intern');
    });
  });
});




// topics List from assigned tasks

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// Inetern subclass

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`