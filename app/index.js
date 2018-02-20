import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {
	addValue(value) { 

	}
	render() {
		return (
	      <div className="main-conatiner">
	        <h1>Contribute to the pot</h1>
	      	<h3 class="label"> Test </h3>
			<input type="text" id="name"/>
			<button onClick='#'> Send </button>
		  </div>
	    );
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);