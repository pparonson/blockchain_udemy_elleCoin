const Block = require("./block");

let newBlock = Block.mineBlock(Block.genesis(), {message: "new test block"});
//console.log(block);
console.log(newBlock.toString());
