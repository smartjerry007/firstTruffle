const SimpleAuction = artifacts.require("SimpleAuction");

contract("SimpleAuction", () => {
   
        const instance = SimpleAuction.deployed();

    it("Bid", async () => {
        await instance.bid(10, {from:"0xca61aedD0e26be8A2Fa3E6fD631C303c78561D38"})
    })
})