// generate HTML format from intern click on indexJS option.  Must module.exports.
// child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
// Engineer is an 'extend' of employee
// Engineer needs 'github', getGithub(), getRole() overrides employee.
const jest = require('jest')

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


const nameEngineer = new Engineer('Krim', '42', 'finalFantasy@gamil.com', 'Krimeas.github.com')


describe("employee class", () => {
  describe("Employee class methods", () => {
    if("gets name", () => {
      expect(nameEngineer.getName()).toBe('Krim');
    });
    if("gets id", () => {
      expect(nameEngineer.getId()).toBe("42");
    });
    if("gets email", () => {
      expect(nameEngineer.getEmail()).toBe('finalFantasy@gamil.com');
    });
    if("gets github", () => {
      expect(nameEngineer.getGithub()).toBe('Krimeas.github.com');
    });
    if("gets role", () => {
      expect(nameEngineer.getRole()).toBe('Engineer');
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

// Engineer subclass

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`