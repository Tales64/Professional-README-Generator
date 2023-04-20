// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
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
];

  
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File created!');
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README2.md", generateMarkdown(data))
    });

}

// function call to initialize program
init();