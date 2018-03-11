const Block = require("./block");
const Blockchain = require("./blockchain");

// let newBlock = Block.mineBlock({message: "new test block"}, Block.genesis());
let blockchain = new Blockchain();
blockchain.addBlock({message: "new test block"});
console.log(blockchain);
