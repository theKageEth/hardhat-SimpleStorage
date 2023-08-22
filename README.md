#SimpleStorage contract using hardhat example - Thanks to Patrik 

```diff

#This project demonstrates a basic Hardhat use case using + Ethers V6.

I followed Patrick Collins FFC tutorial.
! At that time he was using ethers v5 and bunch of libraries. As for 2023 you can replace majority of libraries with just hardhat-toolbox. This simple project comes with a SimpleStorage contract, a test for that contract, and a script that deploys that contract.

+ I have added a task sample also.

- remember to replace the API keys with your own in hardhat.config

Try running some of the following tasks:

```shell
npx hardhat
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
