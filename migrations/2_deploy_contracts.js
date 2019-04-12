const BitGuanoToken = artifacts.require("BitGuanoToken");

module.exports = function(deployer) {
  deployer.deploy(BitGuanoToken);
};
