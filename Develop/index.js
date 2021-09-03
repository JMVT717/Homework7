// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title?",
        name: "Title",
    },
    {
        type: "input",
        message: "Description?",
        name: "Description",
    },
    {
        type: "input",
        message: "table of contents",
        name:"table of contents"
    },
    {
        type: "input",
        message: "Installation?",
        name:"installation"
    },
    {
        type: "input",
        message: "Usage?",
        name:"usage"
    },
    // {
    //     type: "list",
    //     message: "License?",
    //     choices: ("yes", "no"),
    //     name:"license"
    // },
    {
        type: "input",
        message: "Contributing?",
        name:"contributing"
    },
    {
        type: "input",
        message: "tests?",
        name:"tests"
    },
    {
        type: "input",
        message: "questions?",
        name:"Questions"
    }
];

inquirer.prompt(questions)
.then((response) =>{
  console.log(response)

    fs.writeFile("README.md", generateMarkdown (response), (err) =>
    err ? console.log(err) : console.log("Success!"))
});


// TODO: Create a function to write README file
const generateMarkdown = (response) => {
    console.log(response)

    fs.writeFile("README.md", generateMarkdown (response), (err) =>
    err ? console.log(err) : console.log("README.md successfully created"))
};


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
