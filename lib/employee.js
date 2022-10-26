// Employee class using constructor method set up and exported for use in other files.  
// is base name, id, email for other subclasses Engineer, Manager, Intern.
class Employee {
  constructor(name, id, email, ) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`Name = ${this.name}`);
    return (this.name)
  }
  getId() {
    console.log(`Name = ${this.name}`);
    return (this.name)
  }
  getEmail() {
    console.log(`Name = ${this.name}`);
    return (this.name)
  }
  getRole() {
    console.log(`Name = ${this.name}`);
    return (this.name)
  }

}

module.exports = Employee;
