const { PORT } = require("../config");
const { startMining, stopMining } = require('./mine'); 
const { utxos } = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
app.use(jsonParser);

app.get('/', (req, res) => {
    res.send("YOOOOO");
})

app.post('/startMining', (req, res) => {
    console.log("Starting to mine");
    startMining();
    res.send("Started to mine");
})

app.post('/stopMining', (req, res) => {
    console.log("Stopped mining");
    stopMining();
    res.send("Stopped mining");
})

app.post('/getBalance', (req, res) => {
    // filter out utxos by address
    const ourUtxos = utxos.filter(utxo => utxo.owner === req.body.address && !utxo.spent);
    const balance = ourUtxos.reduce((acc, c) => acc + c.amount, 0);
    res.send(balance.toString());
})

app.listen(PORT);