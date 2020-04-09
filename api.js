const axios = require("axios");
const generateMD = require("./utils/generateMarkdown.js");
const index = require("./index.js")
function apiCall (username, response) {
console.log(username);
console.log(response);
const url = `https://api.github.com/users/${username}/events/public`
    axios
    .get(url)
    .then(function(res){
     response.email = res.data[0].payload.commits[0].author.email;
     response.avatar_url = res.data[0].actor.avatar_url;
     console.log(response);
     generateMD (response);
    })
    .catch(error => console.log(error))
    console.log(username)
  }


module.exports = apiCall;


