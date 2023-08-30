// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
	if (!license) return "";
	const licenseProperString = license.split(" ").join("_");
	const licenseLink = `![License](https://img.shields.io/badge/License-${licenseProperString}-orange.svg)`;
	return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, contributing, test, license, github, email }) {
	return `
  # ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  <!-- ---------------------------- -->
  <a id='Installation'></a>
  
  ## Installation
  
  ${installation}
  
  <!-- ---------------------------- -->
  <a id='Usage'></a>
  
  ## Usage Info
  
  ${usage}

  <!-- ---------------------------- -->
  <a id='License'></a>
  
  ## License
  
  ${renderLicenseBadge(license)}
  
  <!-- ---------------------------- -->
  <a id='Contributing'></a>
  
  ## Contributing
  
  ${contributing}
  
  <!-- ---------------------------- -->
  <a id='Tests'></a>
  
  ## Test
  
  ${test}

  <!-- ---------------------------- -->
  <a id='Questions'></a>
  
  ## Questions
  
  Link to my [Github](https://github.com/${github})

  My email: ${email}
  
  Reach by github first please
    `;
}

module.exports = generateMarkdown;
