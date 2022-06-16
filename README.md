# web3-starter

[![CircleCI](https://circleci.com/gh/jcuffney/web3-starter/tree/main.svg?style=svg&circle-token=b49df32603ff032d1cb39c10b8e836edce1bed57)](https://circleci.com/gh/jcuffney/web3-starter/tree/main)

## Description

This is intended to be used for developing smart contracts on the ethereum blockchain using the [hardhat](https://hardhat.org/) framework.

## Requirements

- nodejs / npm

## Getting Started

1. `npm install`

## Commands

`$ npm run <command>`

| command                     | description   |
|-----------------------------|---------------|
| `init:hard`                 | `init` with a fresh package-lock |
| `test`                      | run tests in watch mode |
| `compile`                   | start development server |
| `clean`                     | clear the ./cache folder |
| `cover`                     | test coverage checks |
| `lint`                      | lints src code |
| `lint:fix`                  | lints src code and fixes errors |
| `node`                      | starts a local ethereum node via hardhat |

## Deployment to local node

1. start a local node `npm run node`
2. in a different terminal run the appropriate deployment script

`npx hardhat run --network localhost scripts/002_deploy-noxcoin.ts`

## Deployment to testnet

`npx hardhat run --network goerli scripts/002_deploy-noxcoin.ts`

## Documentation

- [hardhat](https://hardhat.org)
- [solidity](https://docs.soliditylang.org)
- [ethereum](https://ethereum.org/en/developers/docs) 

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
