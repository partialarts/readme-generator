// Required modules and files
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile); // Converts callback function into function that returns a promise 

// Questions array
const askQuestions = () => {
    return inquirer.prompt([ // Gets answers to questions
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
            choices: ["Apache", "GNU", "MIT", "Mozilla", "Other"],
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide information on how to contribute to the project",
        },
        {
            type: "input",
            name: "testInstructions",
            message: "Please enter testing instructions",
        },
        {
            type: "input",
            name: "gitHubName",
            message: "Please enter your GitHub username",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address",
        },
    ]);
};

// Initialise using async/await and try/catch
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

// Starts the application
init();