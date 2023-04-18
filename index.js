// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    
}];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your app used for?',
      name: 'app usage',
    },
    {
      type: 'input',
      message: 'How should your app be used?',
      name: 'app usage',
    },
    {
      type: 'input',
      message: 'How do you install your app?',
      name: 'app usage',
    },
    {
      type: 'input',
      message: 'How do you report issues?',
      name: 'app usage',
    },
    {
      type: 'input',
      message: 'How do you make contributions?',
      name: 'app usage',
    },
    {
        type: 'checkbox',
        message: 'What License does this app use?',
        name: 'License',
        choices: ['GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
        'The Unlicense'],
      },
      {type: 'input',
  name: 'username',
  message: 'What is your GitHub username?',}
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// TODO: Create a function to write README file
fs.writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
