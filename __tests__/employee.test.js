// generate HTML format from intern click on indexJS option.  Must module.exports.
// child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
const jest = require('jest')

// pulls from lib folder employee class.
const Employee = require('../lib/Employee');

// test variable for passing test below.
const nameEmployee = new Employee('Krim', '42', 'finalFantasy@gamil.com')


// start of test running basic employee class.  
// needs Arrange and Act, only Asert below?
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





// topics List from assigned tasks

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`
