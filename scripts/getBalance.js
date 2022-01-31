const { PUBLIC_KEY } = require("../config")
const axios = require("axios");
const { PORT } = require("../config"); 

axios.defaults.baseURL = `http://localhost:${PORT}`;

function getBalance() {
    axios.post('/getBalance', { address: PUBLIC_KEY })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    }) 
}

getBalance();