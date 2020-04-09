const fs = require("fs");
function generateMD(answers) {
  var userInfo = ` 
  <img align="left" src= "https://img.shields.io/badge/License-${answers.license}-green">
  <img align="right" width="100" height="100" src="${res.data.avatar_url}">;


##
<br />
# **Project** 
_${answers.project}_
#
<br />
## Live Link 
* ~~_Insert Live Link Once Generated_~~
##  **Table of Contents**
* Description
* Installation
* Technology Stack
* Usage
##  **Description**
${answers.description}
## **Installation**
${answers.installation}
## **Technology Stack**
${answers.technology}
##  **Usage**
${answers.usage}
###  **Contributors**
${answers.contributors}
## **Contact**
####  * Name: ${answers.firstLast}
####  * GitHub "https://github.com/${answers.username}" 
####  * Portfolio 
~~${response.portfolio}~~
#### * Email: [${response.data.email}](${response.data.email})
#### * LinkedIn: https://www.linkedin.com/in/${answers.linkedIn}
#
## 

<br />
#
##### **License** 
* ${answers.license}
## Tests
###### To Run Tests, Run the Following Command: ${answers.tests}

`;

fs.writeFile("./generate.md", userInfo, function(err) {
    if (err) {
    return console.log(err);
    }
    console.log("Success!");
  });

}



module.exports = generateMD;
