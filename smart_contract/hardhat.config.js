//https://eth-ropsten.alchemyapi.io/v2/bYWiM-TAq9Dup4zAGHHBfl-B4e95kBFA

require ('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/bYWiM-TAq9Dup4zAGHHBfl-B4e95kBFA',
      accounts : ['d6b0fc7c301be494bf3dac0501b8e1729fb82141f48175fb17862d9eed652547']
    }
  }
}