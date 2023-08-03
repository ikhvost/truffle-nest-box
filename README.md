<p align="center">
  <a href="#"><img src="./box-img-sm.png" alt="Logo" /></a>
</p>

# Truffle-NestJS-Box
To Be Used as Truffle Box Creating API Endpoints for
Ethereum Blockchain.

We use personalised blockchain for Ethereum BlockChain
Development. This personalised blockchain is made in the
GanacheCLI.

The Smart Contract Written in solidity language
is deployed on this Ethereum Blockchain. Smart Contract is
Immutable hence, once deployed it can't be changed.

A truffle box to serve as the foundation of any Truffle and Nest.js dApp.

**Pre-Requisites**
1. [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
2. [npx](https://www.npmjs.com/package/npx#install)

**Installation**
1. Set correct Node.js version.
```
nvm use
```

2. Install necessary dependencies.
```
npm clean-install
```

3. Run the ganache-cli.
```
npx ganache
```

4. Now these contracts need to be compiled and deployed on the Blockchain. For this, run `npx truffle migrate` inside project root directory. 
5. You can see that a new `/build` folder has been created in the root directory which contains the compiled contracts.
6. Create `.env` file in root directory and pass to `METACOIN_ADDRESS` address of created contract from blockchain network. (You have `.env.template` as a sample)
7. To run the Node server `npm start`.
8. Server will be available on `http://${APP_HOST}:${APP_PORT}/`.

**Collaborators**
1. [Illia Khvost](https://github.com/ikhvost)
2. [Bohdan Titov](https://github.com/titovb)
2. [Philip Schulz-Klingauf](https://github.com/pschulzk)
