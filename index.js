require(`dotenv`).config();
const axios = require("axios");
const inquirer = require("inquirer");
// const api = require("./utils/api");
const fs = require("fs");
const badge = require("gh-badges");

function inquireQuestions() {
  inquirer
    .prompt([
      {
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
        choices: [
          "Node.Js",
          " Express",
          " JavaScript",
          " jQuery",
          " React.js",
          " React",
          " GIT",
          " GitHub",
          " MongoDB",
          " MySQL",
          " Firebase",
          " Handlebars",
          " HTML",
          " CSS",
          " Bootstrap",
          " Media Queries",
          " APIs",
          " Microsoft Suite",
          " Heroku",
          " Command- Line"
        ],
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

function apiCall(username, answers) {
  const url = `https://api.github.com/users/` + username;

  axios
    .get(url, { header: { Authorization: `token ${process.env.GH_TOKEN}` } })
    .then(function(res) {
      console.log(res);
    })
    .catch(error => console.log(error));
}

// apiCall();

// module.exports = apiCall;

function generateMD(answers) {
  var userInfo = ` 
### **Contributers**
${answers.contributers}

##  **Description**
${answers.description}

## **Installation**
${answers.installation}

## **Technology Stack**
${answers.technology}

##  **Usage**
${answers.usage}

####   GitHub "https://github.com/users/${answers.username}"

    `;
}

// return
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="jumbotron jumbotron-fluid">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//       <p class="lead">Github username: ${answers.username}.</p>
//       <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">Project name: ${answers.project}</li>
//         <li class="list-group-item">Description: ${answers.description}</li>
//         <li class="list-group-item">Installation: ${answers.installation}</li>
//         <li class="list-group-item">Technology used: ${answers.technology}</li>
//         <li class="list-group-item">Usage: ${answers.usage}</li>
//         <li class="list-group-item">License: ${answers.license}</li>
//         <li class="list-group-item">Contributors: ${answers.contributers}</li>
//         <li class="list-group-item">LinkedIn username: ${answers.linkedin}</li>
//         <li class="list-group-item">Portfolio: ${answers.portfolio}</li>
//         <li class="list-group-item">Tests: ${answers.tests}</li>
//       </ul>
//     </div>
//   </div>
//   </body>
//   </html>`
