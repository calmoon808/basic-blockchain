const client = require('./client');

// invoke functions
client.request("stopMining", [], function(err, response) {
    if(err) throw err;
    console.log(response.result);
})