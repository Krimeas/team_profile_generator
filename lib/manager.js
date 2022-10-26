// imports Employee Class
const Employee = require('./Employee');

// subclass class of Employee  made using constructor method set up and exported for use in other files.  
// pulls base name, id, email and adds office phone Number.
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {

    super(name, id, email)
    this.school = officeNumber
  }

  getRole() {
    return('Manager')

  }
}


module.exports = Manager;