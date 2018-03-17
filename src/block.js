const SHA256 = require("crypto-js/sha256");

module.exports = class Block {
  constructor(data, previousHash) {
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = Block.calculateHash(data, previousHash);
  }

  static genesis() {
    // return an instance of 'this' block class instance
    return new this({message: "genesis block"}, "0")
  }

  static mineBlock(data, previousBlock) {
    // const timestamp = Date.now();
    const previousHash = previousBlock.hash;
    //const hash = Block.calculateHash(data, previousHash);

    return new this(data, previousHash);
  }

  static calculateHash(data, previousHash) {
    return SHA256(`${data}${previousHash}`).toString()
  }

  static calcBlockHash(block) {
    const {data, previousHash} = block;
    return Block.calculateHash(data, previousHash);
  }

  toString() {
    return `Block -
      Timestamp: ${this.timestamp}
      Data: ${this.data}
      PreviousHash: ${this.previousHash }
      Hash: ${this.hash}`;
  }

}
