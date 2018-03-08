const Block = require("./block");

describe("Block", () => {
  // set scope of the test variables
  let data, previousBlock, block;

  beforeEach(() => {
    data = {message: "new test block"};
    previousBlock = Block.genesis();
    block = Block.mineBlock(data, previousBlock);
  });

  it("sets the `data` to match the input", () => {
    expect(block.data).toEqual(data);
  });

  it("sets the `previousHash` to match hash of previous block", () => {
    console.log(`block.previousHash: ${block.toString()}`);
    expect(block.previousHash).toEqual(previousBlock.hash);
  });
});
