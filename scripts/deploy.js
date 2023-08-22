const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const SimpleStorageFactory = await hre.ethers.deployContract("SimpleStorage");
  console.log("deploying wait");

  const SimpleStorage = await SimpleStorageFactory.waitForDeployment();
  const contractAddress = SimpleStorage.target;
  console.log(contractAddress);

  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    const deploymentReceipt = await SimpleStorage.deploymentTransaction().wait(5);
    await verify(contractAddress, []);
  }

  // current value
  const currentValue = await SimpleStorage.retrieve();
  console.log(currentValue.toString());

  // update value

  const transactionResponse = await SimpleStorage.store(7);
  transactionResponse.wait(2);
  const updatedValue = await SimpleStorage.retrieve();
  console.log(updatedValue.toString());
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
