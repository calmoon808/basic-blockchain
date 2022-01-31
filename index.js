const jayson = require('jayson');
const { startMining, stopMining } = require('./mine');
const { PORT } = require("./config");
const { utxos } = require("./db");

// create JSON-RPC API server
const server = jayson.server({
    startMining: function(_, callback) {
        callback(null, "success!");
        startMining();
    },
    stopMining: function(_, callback) {
        callback(null, "success!");
        stopMining();
    },
    getBalance: function([address], callback) {
        const ourUtxos = utxos.filter(x => x.owner === address && !x.spent);
        const sum = ourUtxos.reduce((p, c) => p + c.amount, 0);
        callback(null, sum);
    }
})

server.http().listen(PORT);