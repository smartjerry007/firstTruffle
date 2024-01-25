// SPDX-License-Identifier: MIT
pragma solidity >= 0.70 <= 0.90;
import  "truffle/Assert.sol";
import "truffle/DeplyedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployAddresses.Adoption());

    uint expectedPetId = 8;
    address expectedAdopter = address(this);

    function testUserCanAdoptPet() public {
        uint returnedId = adoption.adopt(expectedPetId);

        Assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");        
    }

    function testGetAdopterAddressByPetIdInArray() public {
        address[16] memory adopters = adoption.getAdopters();

        Assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract.");
    }
    
}