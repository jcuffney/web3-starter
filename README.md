# web3-starter

[![CircleCI](https://circleci.com/gh/jcuffney/web3-starter/tree/main.svg?style=svg&circle-token=b49df32603ff032d1cb39c10b8e836edce1bed57)](https://circleci.com/gh/jcuffney/web3-starter/tree/main)

## Description

This is intended to be used for developing smart contracts on the ethereum blockchain. 

## Requirements

- nodejs / npm

## Getting Started

1. `npm install`

## Commands

## Commands

`$ npm run <command>`

| command                     | description   |
|-----------------------------|---------------|
| `init:hard`                 | `init` with a fresh package-lock |
| `clean`                     | clear the ./cache folder |
| `compile`                   | start development server |
| `test`                      | run tests in watch mode |
| `cover`                     | test coverage checks |
| `lint`                      | lints src code |
| `lint:fix`                  | lints src code and fixes errors |

---

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
