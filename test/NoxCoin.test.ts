import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";

// eslint-disable-next-line camelcase,node/no-missing-import
import { NoxCoin, NoxCoin__factory } from "../typechain";

describe("NoxCoin", () => {
  let instance: NoxCoin;
  let owner: Signer;

  it("should deploy", async () => {
    // a `Signer` in ether.js is a object that represents a user account
    // this get's all the accounts in the node we're connected to and only
    // keeping the first one in the variable `owner`
    [owner] = await ethers.getSigners();

    // deploy the contract to our node
    const factory = new NoxCoin__factory(owner);
    const deployment = await factory.deploy();

    instance = NoxCoin__factory.connect(deployment.address, owner);
  });

  it("should mint tokens to the owner", async () => {
    const ownerAddress = await owner.getAddress();
    const balance = await instance.balanceOf(ownerAddress);
    expect(balance).to.equal(10);
  });
});
