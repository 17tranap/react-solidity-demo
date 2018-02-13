import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
	      <div className="solidity">
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