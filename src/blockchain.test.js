const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
  let bc;
  let bc2;
  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it("starts with valid genesis block", () => {
    // using data to avoid timestamp errors
    expect(bc.chain[0].hash).toEqual(Block.genesis().hash);
  });

  it("adds a new block", () => {
    const data = {message: "new test block"};
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
  });

  it("validates block hashes", () => {
    const data1 = {message: "new test block"};
    const data2 = {message: "another test block"};

    bc.addBlock(data1);
    bc.addBlock(data2);
    bc.chain[1].data = {message: "Invalid block"};
    // console.log(`bc.chain[1].data: ${JSON.stringify(bc.chain[1].data, null, 2)}`);
    expect(bc.isValidChain()).toBe(true);
  });

});
