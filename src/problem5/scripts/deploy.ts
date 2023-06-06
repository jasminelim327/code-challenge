import { ethers, upgrades } from "hardhat";

async function main() {
  const TokenBalanceRetriever = await ethers.getContractFactory("TokenBalanceRetriever");
  console.log("Deploying TokenBalanceRetriever...");
  const tokenBalanceRetriever = await upgrades.deployProxy(TokenBalanceRetriever);
  await tokenBalanceRetriever.deployed();
  console.log("TokenBalanceRetriever deployed to:", tokenBalanceRetriever.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
