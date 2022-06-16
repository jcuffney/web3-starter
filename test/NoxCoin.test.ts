import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";

/**
 * FIXME:
 *
 * Error in plugin solidity-coverage: TSError: ⨯ Unable to compile TypeScript:
 *
 * test/NoxCoin.test.ts:6:43 - error TS2307: Cannot find module '../typechain' or its corresponding type declarations.
 *
 * 6 import { NoxCoin, NoxCoin__factory } from "../typechain";
 */
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
