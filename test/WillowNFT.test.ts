import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";

// eslint-disable-next-line camelcase,node/no-missing-import
import { WillowNFT, WillowNFT__factory } from "../typechain";

const ETHEREUM_ADDRESS_LENGTH = 42;

describe("WillowNFT", () => {
  let instance: WillowNFT;
  let owner: Signer;

  it("should deploy", async () => {
    // a `Signer` in ether.js is a object that represents a user account
    // this get's all the accounts in the node we're connected to and only
    // keeping the first one in the variable `owner`
    [owner] = await ethers.getSigners();

    // deploy the contract to our node
    const factory = new WillowNFT__factory(owner);
    const deployment = await factory.deploy();

    instance = WillowNFT__factory.connect(deployment.address, owner);

    const name = await instance.name();
    const symbol = await instance.symbol();

    expect(instance.address).to.have.length(ETHEREUM_ADDRESS_LENGTH);

    expect(name).to.equals("SimpleNFT");
    expect(symbol).to.equals("SimpleNFT");
  });
});
