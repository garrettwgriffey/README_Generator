const fs = require("fs");
function generateMD(response) {
  var userInfo = `

  <img align="left" src= "https://img.shields.io/badge/License-${response.license}-green">

  <img align="right" width="100" height="100" src="${response.avatar_url}">;

  
# **Project** 
${response.project}

## Live Link 
* ~~_Insert Live Link Once Generated_~~

##  **Table of Contents**
* Description
* Installation
* Technology Stack
* Usage

##  **Description**
${response.description}
## **Installation**
${response.installation}
## **Technology Stack**
${response.technology}
##  **Usage**
${response.usage}
###  **Contributors**
${response.contributors}
## **Contact**
####  * Name: ${response.firstLast}
####  * GitHub "https://github.com/${response.username}" 
####  * Portfolio 
~~${response.portfolio}~~
#### * Email: [${response.email}](${response.email})
#### * LinkedIn: https://www.linkedin.com/in/${response.linkedIn}
#
## 

<br />
#
##### **License** 
* ${response.license}
## Tests
###### To Run Tests, Run the Following Command: ${response.tests}

`
// end function

fs.writeFile("./generate.md", userInfo, function(err) {
    if (err) {
    return console.log(err);
    }
    console.log("Success!");
  });

}



module.exports = generateMD;
