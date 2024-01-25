
const Ballot = artifacts.require("Ballot");

module.exports = function(deployer) {
  const first = web3.utils.asciiToHex("hoil");
  const second = web3.utils.asciiToHex("hoili");
  const third = web3.utils.asciiToHex("gangdo");
  deployer.deploy(Ballot, [first, second, third], {from : "0x103718865d815AC87d1982B9480312b455a87935"});
};
