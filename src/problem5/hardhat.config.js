require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

const { infuraApiKey, mnemonic, etherscanApiKey } = require('./secrets.json');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic }
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: etherscanApiKey
  }
};
