const Blockchain = require("./models/Blockchain");
const Block = require("./models/Block");

const db = {
    blockchain: new Blockchain()
}

function mine() {
    db.blockchain.addBlock(new Block());

    console.log(`Just mined block #${db.blockchain.blockHeight()}`)

    setTimeout(mine, 2500);
}

mine();