import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {
	constructor(props){
	    super(props)
	    this.state = {
	      minimumContribution: 0,
	      total: 0,
	    }
	    if(typeof web3 != 'undefined'){
	      console.log("Using web3 detected from external source like Metamask")
	      this.web3 = new Web3(web3.currentProvider)
	    }else{
	      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
	    }
	    const MyContract = web3.eth.contract([
			{
				"constant": false,
				"inputs": [],
				"name": "kill",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "contributor",
						"type": "address"
					}
				],
				"name": "checkContributorExists",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [],
				"name": "returnMoney",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "number",
						"type": "uint256"
					}
				],
				"name": "putInMoney",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_minimumContribution",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			}
		])
	    this.state.ContractInstance = MyContract.at("0x61d89802d850d2b18cb7d42afc9a39776b38eb97")
	}

	updateState() {
		this.state.ContractInstance.minimumContribution((err, result) => {
			if(result != null) {
				this.setState({
					minimumContribution: parseFloat(web3.fromWei(result, 'ether'))
				})
			}
		})
		this.state.ContractInstance.total((err, result) => {
			if{result != null) {
				this.setState({
					total: parseFloat(web3.fromWei(result, 'ether'))
				})
			}
		})
	}

	setupListeners() {
		sendButton.addEventListener('click', addMoney())
	}

	addMoney() {
		let toAdd = this.refs['ether-in'].value
		if(!toAdd) toAdd = 0.1
		if(parseFloat(toAdd) < this.state.minimumContribution){
        	 alert('You must contribute more than the minimum')
         	 cb()
      	} else {
        	this.state.ContractInstance.putInMoney(parseInt(toAdd), {
               gas: 300000,
               from: web3.eth.accounts[0],
               value: web3.toWei(bet, 'ether')
            }, (err, result) => {
              cb()
            })
        }
	}

	render() {
		return (
	      <div className="main-container">
	        <h1>Contribute to the pot</h1>
	      </div>

	      <div className="block">
	      	<h3 class="label"> How musch do you want to be? </h3>
			<input type="pot-input"  ref="ether-input" type="number" placeholder={this.state.minimumContribuion} />
			<button onClick='#' name="sendButton"> Send </button>
		  </div>
	    );
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);