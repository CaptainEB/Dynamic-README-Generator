// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "Enter the title of the README file:",
		name: "title",
	},
	{
		type: "input",
		message: "Enter the description text:",
		name: "description",
	},
	{
		type: "input",
		message: "Enter the installation guide:",
		name: "installation",
	},
	{
		type: "input",
		message: "Enter the usage information:",
		name: "usage",
	},
	{
		type: "input",
		message: "Enter the contributing info:",
		name: "contributing",
	},
	{
		type: "input",
		message: "Enter the test info:",
		name: "test",
	},
	{
		type: "input",
		message: "Enter the license name:",
		name: "license",
	},
	{
		type: "input",
		message: "Enter your Github username:",
		name: "github",
	},
	{
		type: "input",
		message: "Enter your email address:",
		name: "email",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
    });
}

// Function call to initialize app
init();
