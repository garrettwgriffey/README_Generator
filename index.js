require(`dotenv`).config();
const axios = require("axios");
const inquirer = require("inquirer");
// const api = require("./utils/api");
const fs = require("fs");
const badge = require("gh-badges");

function inquireQuestions (){
inquirer
.prompt([{
    type: "input",
    message: "What is your full name?",
    name: "name"
  },
  {
    type: "input",
    message: "GitHub username",
    name: "username"
  },
  {
    type: "Input",
    message: "Project Name",
    name: "project"
  },
  {
    type: "input",
    message: "Description",
    name: "description"
  },
  {
    type: "input",
    message: "What do you need to install to make this app to work?",
    name: "installation"
  },
  {
    type: "checkbox",
    message: "Technology Used",
    choices: ["Node.Js", " Express", " JavaScript", " jQuery", " React.js", " React", " GIT", " GitHub", " MongoDB", " MySQL", " Firebase", " Handlebars", " HTML", " CSS", " Bootstrap", " Media Queries", " APIs", " Microsoft Suite", " Heroku", " Command- Line"],
    name: "technology"
  },
  {
    type: "input",
    message: "Usage",
    name: "usage"
  },
  {
    type: "list",
    message: "License",
    choices: ["MIT", "BSD", "ISC", "Apache", "GPL"],
    name: "license"
  },
  {
    type: "input",
    message: "Contributors",
    name: "contributors"
  },
  {
    type: "input",
    message: "What is your LinkedIn username?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What is your portfolio URL?",
    name: "portfolio"
  },
  {
    type: "input",
    message: "Tests?",
    name: "tests"
  }
])
  .then(answers => {
    let username = answers.username;
    apiCall(username, answers);

  });

}
inquireQuestions();


function apiCall (username, answers) {
    const url = `https://api.github.com/users/` + username;

    axios
    .get(url, {header:{'Authorization': `token ${process.env.GH_TOKEN}`}})
    .then(function(res){
      console.log(res);
    })
    .catch(error => console.log(error))
  }


// apiCall();

// module.exports = apiCall;


