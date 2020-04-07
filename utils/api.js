const axios = require("axios");
require(`dotenv`).config();

function apiCall (username, response) {
console.log(username);
console.log(response);
    // const url = `https://api.github.com/users/` + username;
const url = `https://api.github.com/users/${username}/events/public`
    axios
    .get(url)
    .then(function(res){
      console.log(res.data[0].payload.commits[0].author.email)
    })
    .catch(error => console.log(error))
    console.log(username)
  }


// apiCall();

module.exports = apiCall;


