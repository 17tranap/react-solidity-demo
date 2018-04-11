var Pot = artifacts.require("./Pot.sol");

module.exports = function(deployer) {
	deployer.deploy(web3.toWei(0.1, 'ether'), 100, {gas: 3000000});
} //0.1 means minimumContribution is set to 0.1 ether 
  //converted to wei which is 10^(-18) ether
  //100 means 100 max contributors
  //gas limit is 3000000