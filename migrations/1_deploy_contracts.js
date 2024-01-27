
const Ballot = artifacts.require("Ballot");
const SimpleAuction = artifacts.require("SimpleAuction");

module.exports = function(deployer) {
  const first = web3.utils.asciiToHex("hoil");
  const second = web3.utils.asciiToHex("gangdo");
  deployer.deploy(Ballot, [first, second], {from : "0x103718865d815AC87d1982B9480312b455a87935"});
  deployer.deploy(SimpleAuction, 3600, "0x103718865d815AC87d1982B9480312b455a87935");
};
