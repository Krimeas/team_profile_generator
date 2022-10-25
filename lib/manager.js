const Employee = require('./Employee');


class Manager extends Employee {
  constructor (name, id, email, officeNumber) {

    super(name, id, email)
    this.school = officeNumber
  }

  getRoel() {
    return('Manager')

  }
}


module.exports = Manager;