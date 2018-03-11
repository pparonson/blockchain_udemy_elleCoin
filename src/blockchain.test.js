const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
  let bc;
  beforeEach(() => {
    bc = new Blockchain();
  });

  it("starts with genesis block", () => {
    // using data to avoid timestamp errors
    expect(bc.chain[0].data).toEqual(Block.genesis().data);
  });

  it("adds a new block", () => {
    const data = {message: "new test block"};
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });
});
