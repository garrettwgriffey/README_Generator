const axios = require("axios");
index = require("./index.js");
require(`dotenv`).config();

function apiCall (username, response) {
console.log(username);
console.log(response);
    const url = `https://api.github.com/users/` + username;

    axios
    .get(url,{header:{'Authurization':`token${process.env.GH_TOKEN}`}})
    .then(function(res){
      console.log(res);
    })
    .catch(error => console.log(error))
    console.log(username)
  }


// apiCall("");

module.exports = apiCall;


