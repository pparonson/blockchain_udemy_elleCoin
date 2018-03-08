const Block = require("./block");

let newBlock = Block.mineBlock({message: "new test block"}, Block.genesis());

// console.log(`Genesis: ${Block.genesis().toString()}`);
console.log(newBlock.toString());
