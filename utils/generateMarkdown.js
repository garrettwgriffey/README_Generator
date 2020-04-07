const fs = require("fs");
function generateMD(answers) {
  var userInfo = ` 
  <img align="left" src= "https://img.shields.io/badge/License-${answers.license}-green">
  <img align="right" width="100" height="100" src="${res.data.avatar_url}">;
  <br/>
  # **Project** 
  ${answers.project}
  #
  <br />
  ## Live Link
  * ~~_Insert Live Link Once Generated_~~
  <br />
  ##  **Table of Contents**
    * Description
    * Installation
    * Technology Stack
    * Usage
  ###  **Contributors**
  ${answers.contributors}
  ##  **Description**
  ${answers.description}
  ## **Installation**
  ${answers.installation}
  ## **Technology Stack**
  ${answers.technology}
  ##  **Usage**
  ${answers.usage}
  ## **Contact**
*

<br />
## --------------------------------------------------------------------
* ####  Name: ${answers.name}
* ####   GitHub "https://github.com/users/${answers.username}"
* ####  ${answers.portfolio}
* #### Email: [${answers.email}](${answers.email})
* #### LinkedIn: "https://www.linkedin.com/in/${answers.linkedIn}
## -------------------------------------------------------------------
<br />

##### **License**
${answers.license}
## Tests;

// Badge

`;
// End markup

fs.writeFile("./README.md", userInfo, function(err) {
    if (err) {
    return console.log(err);
    }
    console.log("Success!");
  });

}



module.exports = generateMD;
