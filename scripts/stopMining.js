const axios = require("axios");
const { PORT } = require("../config"); 

axios.defaults.baseURL = `http://localhost:${PORT}`;

function stopMining() {
    axios.post('/stopMining').then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    }) 
}

stopMining();