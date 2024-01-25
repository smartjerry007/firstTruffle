const Ballot = artifacts.require("Ballot");

contract('Ballot', () => {
  let instance;
  let accounts;
  before(async () => {
    instance = await Ballot.deployed();
    accounts = await web3.eth.getAccounts();
  })
  it('should give right.', async () => {
    
    await instance.giveRightToVote(accounts[1], {from : accounts[0]});
    await instance.giveRightToVote(accounts[2], {from : accounts[0]});
    await instance.giveRightToVote(accounts[3], {from : accounts[0]});
    await instance.giveRightToVote(accounts[4], {from : accounts[0]});
    let voter = await instance.voters(accounts[1])
    assert.equal(voter.weight, 1, "voters has 1 vote right.");
  });

  it("should delegate to someone", async () => {
    
    await instance.delegate(accounts[1], {from : accounts[2]});
    await instance.delegate(accounts[1], {from : accounts[3]});
    let voter1 = await instance.voters(accounts[1]);
    assert.equal(voter1.weight, 3, "voter1 has 2 vote right.")
  })

  it("should be winner", async () => {
    await instance.vote(1, {from : accounts[1]});
    await instance.vote(2, {from : accounts[4]});
    let winningIndex = await instance.winningProposal();
    let winName = await instance.winnerName();
    assert.equal(winningIndex, 1, "winner should be second");
    console.log(web3.utils.hexToAscii(winName));
  })
  
});
