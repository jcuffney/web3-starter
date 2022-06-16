// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/**
 * https://docs.openzeppelin.com/contracts/4.x/wizard
 */

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract WillowNFT is ERC721 {

    constructor() ERC721("WillowNFT", "WILLOW") {}

}
