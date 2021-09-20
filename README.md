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
1. [NodeJS](https://nodejs.org/)
2. [NestJS](https://nestjs.com/)
3. [GanacheCLI](https://github.com/trufflesuite/ganache-cli)
4. [Truffle](https://github.com/trufflesuite/truffle)

**Installation**
1. Install Truffle, Ganache CLI and NestJS globally. If you prefer, the graphical version of Ganache works as well!
```
npm install -g truffle
npm install -g ganache-cli
npm install -g @nestjs/cli
```

2. Download the box. This also takes care of installing the necessary dependencies.
```
truffle unbox ikhvost/truffle-nest-box
```

3. Run the ganache-cli.
```
ganache-cli
```

4. Now these contracts need to be compiled and deployed on the Blockchain. For this, run `truffle migrate` inside project root directory. 
5. You can see that a new `/build` folder has been created in the root directory which contains the compiled contracts.
6. Create `.env` file in root directory and pass to `METACOIN_ADDRESS` address of created contract from blockchain network. (You have `.env.template` as a sample)
7. To run the Node server `npm start`.
8. Server will be available on `http://${APP_HOST}:${APP_PORT}/`.

**Collaborators**
1. [Illia Khvost](https://github.com/ikhvost)
2. [Bohdan Titov](https://github.com/titovb)
