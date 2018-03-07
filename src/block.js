const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(timestamp, data, previousHash, hash) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
  }

  static genesis() {
    // return an instance of 'this' block class instance
    return new this(Date.now(), {}, "", "g3n3515b10ckh45h")
  }

  static mineBlock(previousBlock, data) {
    const timestamp = Date.now();
    const previousHash = previousBlock.hash;
    const hash = Block.calculateHash(timestamp, data, previousHash);

    return new this(timestamp, data, previousHash, hash).toString();
  }

  static calculateHash(timestamp, data, previousHash) {
    return SHA256(`${timestamp}${data}${previousHash}`).toString()
  }

  toString() {
    return `Block -
      Timestamp: ${this.timestamp}
      Data: ${this.data}
      PreviousHash: ${this.previousHasht }
      Hash: ${this.hash}`;
  }

}

module.exports = Block;
