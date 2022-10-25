// Generate HTML format from intern click on indexJS option.  Must module.exports.
// Child/subclass of 'employee class. 
// Employee has properties name, id, email to be filled in from inquirer.
// Employee has getName(), hetId(), getEmail(), getRole(), 
// Manager is an 'extend' of employee
// Manager needs 'officenumber', getRole() overrides employee.

const Employee = require('../lib/Employee');
const Letter = require('../lib/Manager');


The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

Manager subclass

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`
