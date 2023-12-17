// function to generate markdown for README
const generateMarkdown = (answers) => {
  console.log(answers) 
  return `# ${answers.projectTitle} ![${
    answers.license}](https://img.shields.io/badge/${answers.license}-License-green)


`;
}

module.exports = generateMarkdown;