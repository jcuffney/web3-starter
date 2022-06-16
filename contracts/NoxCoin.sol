// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/**
 * https://docs.openzeppelin.com/contracts/4.x/wizard
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract NoxCoin is ERC20 {

    constructor() ERC20("NoxCoin", "NOX") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

}
