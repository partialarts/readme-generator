// Required modules and files
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// Questions array
const askQuestions = () => {
return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of the project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use',
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "The Unlicense", "Other"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provid information on how to contribute to the project",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Please enter testing instructions",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "The Unlicense", "Other"],
    },
    {
        type: "input",
        name: "gitHubName",
        message: "Please enter your GitHub username",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "The Unlicense", "Other"],
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "The Unlicense", "Other"],
    },
]);
};

const licenses = {
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GNU': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
    'The Unlicense': 'http://unlicense.org/',
    'Other': '',
};

const init = async () => {
    console.log('Welcome!');
    try {
      const answers = await askQuestions();

      const content = generateMarkdown(answers);
  
      await writeFileAsync('yourREADME.md', content);
  
      console.log('yourREADME.md has successfully been generated!');
    } catch (err) {
      console.log(err);
    }
  };

init();