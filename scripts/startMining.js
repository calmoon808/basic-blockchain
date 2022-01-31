const axios = require("axios");
const { PORT } = require("../config"); 

axios.defaults.baseURL = `http://localhost:${PORT}`;

function startMining() {
    axios.post('/startMining').then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    }) 
}

startMining();