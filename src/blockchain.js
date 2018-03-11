const Block = require("./block");

module.exports = class Blockchain {
  constructor() {
    // create a chain array property to hold blocks
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const previousBlock = this.chain[this.chain.length - 1];
    const block = Block.mineBlock(data, previousBlock);
    this.chain.push(block);

    return block;
  }
}
