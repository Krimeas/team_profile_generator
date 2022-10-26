const inquirer = require('inquirer')
const fs = require('fs')


// other files

// needs to everythign at once to HTML File in correct formatting.
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const StartHTML = require('./lib/StartHTML')

// Build initial prompt that when you enter a team memebers type, it starts that Prompt/function.
// startPopulation should write the initial HTML file. 
// Then ask a question for what type of tema member.
//Picking a team member should roll to the function related to that team member
// That should then build and append to the html page.
// append js file and bring const over?
//make sure is in proper format.

// my team array pushing to script.js file for appending to HTML via standard JS.
const myTeam = [];

//new member function, runs on start.  Prompts to answer what type of employee.  depending on answer, fires off a function, for each employee type, or creates HTML with answers stroed int he array.  
const newMember = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: "role",
      message: "What type of Employee?",
      choices: ['Manager', 'Engineer', 'Intern', 'No'],
    },
  ]).then(choiceMEIN => {
      switch (choiceMEIN.role) {
        case 'Manager':
          createManager();
          console.log('Firing create Manager function.');
          break;
        case 'Engineer':
          createEngineer();
          console.log('Firing create Engineer function.');
          break;
        case 'Intern':
          createIntern();
          console.log('Firing create Intern function.');
          break;
        default:
          console.log(`Employee List}.`);
          createHTML();
      }
    })

}

//create manager function includes manager specific employee question then pushes andswrrs to myTeam array.
const createManager = () => {
  inquirer
    .prompt([
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
        name: "phone",
        message: "If your employee is a manager, what is their phone number?",
      },
      
    ]).then((answers) => {
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.phone); 
      myTeam.push(newManager);
      newMember();
    });
}
 
//create manager function includes Engineer specific employee question then pushes andswrrs to myTeam array.
const createEngineer = () => {
  inquirer
    .prompt([
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
        name: "github",
        message: "If your employee is an engineer, what is their github user ID?",
      },  
    ]).then((answers) => {
      const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github); 
      myTeam.push(newEngineer);
      newMember();
    });
}

//create manager function includes Intern specific employee question then pushes andswrrs to myTeam array.
const createIntern = () => {
  inquirer
    .prompt([
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
        name: "school",
        message: "If your employee is an Intern, what is their School name?",
      },
    ]).then((answers) => {
      const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school); 
      myTeam.push(newIntern);
      newMember();
    });
}

// HTML File should take input from these and then write larger HTML file, this will only write the starterHTMl.  Need to get it to apply the answers to the prompts to append to an script.js which will then append data into the generated HTML.  Link included to script.js on HTML file.  Formal in Bootstrap.
const createHTML = () => {
  fs.writeFile('./dist/index.html', StartHTML, 'UTF-8', (err) => {
    (err) ? console.log(err) : console.log("sucess!")
  })
  // append file to script.js not completed.  Says myTeam: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array
  fs.appendFile('./dist/script.js', myTeam, 'UTF-8', (err) => {
    (err) ? console.log(err) : console.log("sucess!")
  })
}


newMember();