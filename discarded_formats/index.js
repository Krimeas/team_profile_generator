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

  let newEmployee = "yes";

  while (newEmployee !== "no") {
    function generateEmployee() {
      inquirer
        .prompt([
          {
            type: 'list',
            name: "role",
            message: "Add another employee? (yes/no)",
            choices: ['Manager', 'Engineer', 'Intern', 'no']
          },
        ])
        if(newEmployee === 'Manager') {
          inquirer
          .prompt([
            {
              type: 'input',
              name: "name",
              message: "What is the employee's name?",
            },
          ])
        }
        if(newEmployee === 'Engineer') {
          inquirer
          .prompt([
            {
              type: 'input',
              name: "name",
              message: "What is the employee's name?",
            },
          ])
        }
        if(newEmployee === 'Intern') {
          inquirer
          .prompt([
            {
              type: 'input',
              name: "name",
              message: "What is the employee's name?",
            },
          ])
        }
    }
  }

  generateEmployee();

}



//Creating a nested DOM structure
//In this example, we attempt to create a nested DOM structure using as few temporary variables as possible.

const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';

document.body.appendChild(fragment);

//It generates the following DOM tree:

<section>
  <ul>
    <li>hello world</li>
  </ul>
</section>



  
//   if ()
//       createManager() {
//         inquirer
//           .prompt([
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             },
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             }    
//           ])
    
//       }
    
//       createEngineer() {
//         inquirer
//           .prompt([
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             },
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             }    
//           ])
    
//       }
    
//       createIntern() {
//         inquirer
//           .prompt([
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             },
//             {
//               type: 'input',
//               message: 'Message here',
//               name: 'usage',
//             }    
//           ])
    
//       }
//   }

  



startPopulation();
