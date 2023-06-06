import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';

const SWTH_TOKEN_ADDRESS = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

const addressesToLookup = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];

async function retrieveHolders() {
  try {
    // Connect to Binance Smart Chain
    const provider = new ethers.JsonRpcProvider('https://bsc-dataseed.binance.org');
  
    // Create an instance of the token contract
    const tokenContract = new ethers.Contract(SWTH_TOKEN_ADDRESS, [
      'function balanceOf(address) view returns (uint256)'
    ], provider);
  
    // Retrieve the balances for each address
    const balances = await Promise.all(
      addressesToLookup.map(async (address) => {
        const balance = await tokenContract.balanceOf(address);
        return ethers.formatUnits(balance, 18); // Assuming the token has 18 decimal places
      })
    );
  
    // Print the results
    balances.forEach((balance, index) => {
      console.log(`${addressesToLookup[index]} ${balance}`);
    });
  } catch (error) {
    console.error('Error retrieving token holders:', error);
  }
}

retrieveHolders();
