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
	    const MyContract = web3.eth.contract([here goes the ABI interface])
	    this.state.ContractInstance = MyContract.at("0x61d89802d850d2b18cb7d42afc9a39776b38eb97")
	}
	addValue(value) { 

	}
	render() {
		return (
	      <div className="main-container">
	        <h1>Contribute to the pot</h1>
	      </div>

	      <div className="block">
	      	<h3 class="label"> How musch do you want to be? </h3>
			<input type="pot-input"  ref="ether-bet" type="number" placeholder={this.state.minimumContribuion} />
			<button onClick='#'> Send </button>
		  </div>
	    );
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);