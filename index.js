// External packages
import inquirer from 'inquirer';
import fs from 'fs';

// inquirer to generate questions

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe Your application?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How to install your app?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Instructions to follow',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'How to use your App?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license did you use?',
      name: 'license',
      choices: ['the MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
      type: 'input',
      message: 'Github username',
      name: 'git',
    },
    {
      type: 'input',
      message: 'E-mail:',
      name: 'email',
    },
  ])
  .then(({ title, description, installation, instructions, license, git, email, usage }) => {
    const template = `# ${title}

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Instruction](#instruction)

  ## Description
 ### ${description}

  ## Installation
 ### ${installation}

  ## Usage
 ### ${usage}

  ## Instructions
 ### ${instructions}

  ## License
  ### ${license}

  # Questions
  * Github: [github](https://github.com/${git})
  * E-mail: ${email}
  `;
    // function to create new file
    createNewFile(title, template);
  });

// creating the createNewFile function
function createNewFile(fileName, data) {
  fs.writeFile(`./${fileName.toLowerCase().split(' ')[0]}.md`, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Your README has been generated');
  });
}
