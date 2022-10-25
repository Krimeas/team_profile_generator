const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')

// other files

// needs to append not write or write everythign at once.


// 

function populateHTML() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Write how to use your application, or link a video from assets.  Example: ![Portfolio](/assets/codingQuizPic.JPG)',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'The next three questions are requesting Pictures, press enter to pass through them if you have none.  Press Enter to proceed now.',
        name: 'pics',
      }    
    ])
      .then((data) => {
  //  The variable the remaining data is buried in such as Table of contents, and the ## section titles.
        let generated = `# ${data.title}
## Table of Contents
1. Description
2. Installation Instructions
3. Usage Instructions
4. Technologies Used
5. Contributor Repository Links
6. Additional Sources
`;

fs.writeFile('readme.md', generated, (err) => {
  (err) ? console.log(err) : console.log("sucess!")
})
});
}

populateHTML();