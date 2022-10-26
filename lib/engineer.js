// imports Employee Class
const Employee = require('./Employee');

// subclass class of Employee  made using constructor method set up and exported for use in other files.  
// pulls base name, id, email and adds github.
class Engineer extends Employee {
  constructor (name, id, email, github) {

    super(name, id, email)
    this.github = github
  }

  getGithub() {
    return(this.github)
    console.log(this.github)
  }

  getRole() {
    return('Engineer')

  }
}


module.exports = Engineer;;