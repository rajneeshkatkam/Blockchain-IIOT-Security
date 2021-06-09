/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

//module.exports = {
//  networks: {
//    development: {
//      host: "localhost",
//      port: 8545,
//      network_id: "*" // Match any network id
//    }
//  }
//};

module.exports = {
  rpc:{
  host:"localhost",
  port:8543
  },
  
  networks: {
	//ganache:{
	//	host:"localhost",
	//	port:7545,
	//	network_id: "*"
 // },
  development: {
  host: "localhost",
  port: 8543,
  network_id: "58343",
  from:"0xf48b5676cbcd6c32a36403c4f0ac7160f3ba8e94"
,

  //gas: 700000
  }
  }
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
