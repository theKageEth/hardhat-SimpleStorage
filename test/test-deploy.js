const { expect, assert } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("SimpleStorage", function () {
  let SimpleStorage, SimpleStorageFactory;

  beforeEach(async function () {
    SimpleStorageFactory = await hre.ethers.deployContract("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.waitForDeployment();
  });

  it("favorite number should be 0", async function () {
    const currentValue = await SimpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should store a number", async function () {
    const expectedtValue = "7";
    const transactionResponse = await SimpleStorage.store(expectedtValue);
    transactionResponse.wait(2);
    const updatedValue = await SimpleStorage.retrieve();
    // assert.equal(updatedValue, expectedtValue);
    expect(updatedValue).to.equal(expectedtValue);
  });
});
