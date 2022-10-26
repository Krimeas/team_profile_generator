// Generate HTML format from intern click on indexJS option.  Must module.exports.
// Child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
// Manager is an 'extend' of employee
// Manager needs 'officenumber', getRole() overrides employee.
const jest = require('jest')

const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

const nameManager = new Manager('Krim', '42', 'finalFantasy@gamil.com', '888675309')


describe("employee class", () => {
  describe("Employee class methods", () => {
    it("gets name", () => {
      expect(nameManager.getName()).toBe('Krim');
    });
    it("gets id", () => {
      expect(nameManager.getId()).toBe("42");
    });
    it("gets email", () => {
      expect(nameManager.getEmail()).toBe('finalFantasy@gamil.com');
    });
    it("gets officenumber", () => {
      expect(nameManager.getOfficeNumber()).toBe('888675309');
    });
    it("gets role", () => {
      expect(nameManager.getRole()).toBe('manager');
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

// Manager subclass

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager