// imports Employee Class
const Employee = require('./Employee');

// subclass class of Employee  made using constructor method set up and exported for use in other files.  
// pulls base name, id, email and adds interns School.
class Intern extends Employee {
  constructor (name, id, email, school) {

    super(name, id, email)
    this.school = school
  }

  getschool() {
    return(this.school)
    console.log(this.school)
  }

  getRole() {
    return('Intern')

  }
}


module.exports = Intern;