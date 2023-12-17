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
        name: 'usage',
        message: 'Provide instructions for use',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide any credits for your project',
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["Apache", "GNU", "MIT", "Mozilla", "The Unlicense", "Other"],
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

const init = async () => {
    console.log('Welcome!');
    try {
      const answers = await askQuestions();
  
      await writeFileAsync('yourREADME.md', generateReadme(answers));
  
      console.log('yourREADME.md has successfully been generated!');
    } catch (err) {
      console.log(err);
    }
  };

init();