// generate HTML format from intern click on indexJS option.  Must module.exports.
// child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
const jest = require('jest')

const Employee = require('../lib/Employee');

const nameEmployee = new Employee('Krim', '42', 'finalFantasy@gamil.com')


describe("employee class", () => {
  describe("Employee class methods", () => {
    if("gets name", () => {
      expect(nameEmployee.getName()).toBe('Krim');
    });
    if("gets id", () => {
      expect(nameEmployee.getId()).toBe("42");
    });
    if("gets email", () => {
      expect(nameEmployee.getEmail()).toBe('finalFantasy@gamil.com');
    });
  });
});






// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`
