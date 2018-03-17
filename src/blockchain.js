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

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // validates multiple chains
  isValidChain(chain) {
    if (chain[0].hash !== Block.genesis().hash) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = chain[i - 1];

      if (currentBlock.previousHash !== previousBlock.hash ||
        currentBlock.hash !== Block.calcBlockHash(currentBlock)) {
        return false;
      }
    }

    return true;
  }
}
