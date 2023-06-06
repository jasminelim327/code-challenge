// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/problem5/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract TokenBalanceRetriever {
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokenAddresses)
        external
        view
        returns (TokenBalance[] memory)
    {
        TokenBalance[] memory balances = new TokenBalance[](tokenAddresses.length);
        
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            address tokenAddress = tokenAddresses[i];
            uint256 balance = IERC20(tokenAddress).balanceOf(wallet);
            balances[i] = TokenBalance(tokenAddress, balance);
        }
        
        return balances;
    }
}
