pragma solidity ^0.4.19;

contract Pot {
	address owner;
	uint total;
	uint minimumContribution;
    address[] contributors;
    
	function Pot(uint _minimumContribution) {
		owner = msg.sender;
		total = 0;
		if(_minimumContribution != 0) minimumContribution = _minimumContribution;
	}

	function kill() { 
		if(msg.sender == owner)
			selfdestruct(owner);
	}

	struct Contributor { 
		uint amountIn;
		uint totalContributed;
	}
	mapping(address => Contributor) contributorInfo;

	function checkContributorExists(address contributor) constant returns(bool) {
		for(uint i = 0; i < contributors.length; i++) {
			if(contributors[i] == contributor) return true;
		}
		return false;
	} 

	function putInMoney(uint number) payable{
		assert(checkContributorExists(msg.sender) == false);
		assert(number >= 1 && number <=10);
		assert(msg.value >= minimumContribution);

		contributorInfo[msg.sender].amountIn = msg.value;
		contributorInfo[msg.sender].totalContributed += msg.value;
		contributors.push(msg.sender);
		total += msg.value;

	}

	function returnMoney() {
		for(uint i = 0; i < contributors.length; i++) {
		    uint moneyIn = contributorInfo[contributors[i]].totalContributed;
			contributors[i].transfer(moneyIn);
		}
	}
	
	function minContribution() constant returns(uint){
	    return minimumContribution;
	}

	function getTotal() constant returns(uint){
		return total;
	}

	function () payable {}
}
