const inquirer = require('inquirer')
const fs = require('fs')


// other files

// needs to everythign at once to HTML File in correct formatting.
const Engineer = require('../lib/Engineer')
const Manager = require('../lib/Manager')
const Intern = require('../lib/Intern')
const StartHTML = require('../lib/StartHTML')

// Build initial prompt that when you enter a team memebers type, it starts that Prompt/function.
// startPopulation should write the initial HTML file. 
// Then ask a question for what type of tema member.
//Picking a team member should roll to the function related to that team member
// That should then build and append to the html page.
// append js file and bring const over?
//make sure is in proper format.


function startPopulation() {
  fs.writeFile('./dist/index.html', StartHTML, (err) => {
    (err) ? console.log(err) : console.log("sucess!")
  })


  inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
 
  inquirer.prompt({
      type: "loop",
      name: "employeeGen",
      message: "Add another employee?",
      questions: [
          {
            type: 'list',
            name: "role",
            message: "What type of Employee?",
            choices: ['Manager', 'Engineer', 'Intern'],
          },
          {
            type: 'input',
            name: "name",
            message: "What is the employee's name?",
          },
          {
            type: 'input',
            name: "id",
            message: "What is the employee's Id Number?",
          },
          {
            type: 'input',
            name: "email",
            message: "What is the employees email?",
          },
          {
            type: 'input',
            name: "special",
            message: "If your employee is a manager, what is their phone number? If your employee is an engineer, what is their github user ID?",
          },
          {
            type: 'input',
            name: "special",
            message: "If your employee is an engineer, what is their github user ID?",
          },
          {
            type: 'input',
            name: "special",
            message: "If your employee is an Intern, what is their School name?",
          },
      ],
  }).then((data) => {
    console.log(data);
    let answers = `
    <div class="col-2 text-left pl-0">
      <p id="name">${data[0].name}</p>
      <p id="role">${data[0].role}</p>
      <p id="id">Email: ${data[0].id}</p>
      <p id="email">Email: ${data[0].email}</p>
      <p id="special">Special: ${data[0].title}</p>
    </div>
    `

    fs.writeFile('./dist/index.html', answers, (err) => {
      (err) ? console.log(err) : console.log("sucess!")
    })

    
  })
}


startPopulation();
