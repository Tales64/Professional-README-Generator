// Template Literals are my friend :)
function generateMarkdown(data) {
  return `

  
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Description
   ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
   ${data.installation}
## Usage
   ${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is legally covered by the ${data.license} license. 
## Contributing
   ${data.contributing}
## Tests
   ${data.tests}
## Questions
   ${data.questions}<br />
<br />
   You can find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
   You can reach me with additional questions on: ${data.email}<br /><br />
   This README was generated by [README-generator](https://github.com/${data.username}/readme-generator)`;
}

module.exports = generateMarkdown;
