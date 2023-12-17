// function to generate markdown for README
const generateMarkdown = (answers) => {

  // Stores links for licenses 
  const licenses = {
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GNU': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
    'Other': '',
  };

  // License bage appended to projectTitle
  return `# ${answers.projectTitle} ![${answers.license}](https://img.shields.io/badge/${answers.license}-License-green)

## Description

${answers.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Please use the following instructions to install the application:
\`\`\`
${answers.installation}
\`\`\`

## Usage

Please follow the usage instructions below:
\`\`\`
${answers.usage}
\`\`\`

## License

This application is covered under the [${answers.license} license](${licenses[answers.license]})

## Contributing

${answers.contributing}

## Tests

Please follow these test instructions:
\`\`\`
${answers.testInstructions}
\`\`\`

## Questions

Please contact me on: ${answers.email}

Visit my GitHub profile [here](https://github.com/${answers.gitHubName})
`;
}

module.exports = generateMarkdown;