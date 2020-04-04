
const inquirer = require("inquirer");
const api = require("./utils/api")
inquirer
  .prompt([
    {
      type: "input",
      name: "github_username",
      message: "Enter Github username:"
    }
  ])
  .then(answers => {
    console.log(answers)
api.getUser(answers.github_username)
  });

