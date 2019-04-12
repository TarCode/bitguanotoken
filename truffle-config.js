const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");

// A TEST MNEMONIC FOR TESTNET. THIS AINT REAL SHIT
var mnemonic = "mother farm spirit movie critic shiver tunnel patient mixed panda ahead drill";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  // networks: {
  //   development: {
  //     host: "127.0.0.1",
  //     port: 8545,
  //     network_id: 5777
  //   }
  // }
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/920e3be773fe4842a69b513c489d5531")
      },
      network_id: 3
    }   
  }
};
