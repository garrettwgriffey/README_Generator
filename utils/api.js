const axios = require("axios")
const api = {
  getUser(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`
    console.log(username)
  }
};

module.exports = api;
