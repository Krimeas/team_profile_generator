// generate HTML format from intern click on indexJS option.  Must module.exports.
// child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
// Engineer is an 'extend' of employee
// Engineer needs 'github', getGithub(), getRole() overrides employee.

const Employee = require('../lib/Employee');
const Letter = require('../lib/Engineer');




The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

Engineer subclass

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`