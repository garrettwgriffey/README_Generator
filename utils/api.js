const axios = require("axios")
const api = {
  getUser(username) {
    return axios
    const url = `https://api.github.com/users/${username}/repos?per_page=100`
    .get()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    console.log(username)
  }
};

api.getUser("")

module.exports = api;


