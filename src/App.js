import React, { Component } from 'react';
import MonthInput from './MonthInput';


class App extends Component {

	constructor() {
		super();
		this.state = {
			monthInput: ''
		}
	}

	selectedMonth = (event) => {
		this.setState({monthInput: event.target.value})
	} 

	


	render() {

		let month = this.state.monthInput;
		
		return (
			<div>
				<h1>How old are YOU?</h1>
				<h2>Enter your DOB:</h2>
				<MonthInput monthSelected = {this.selectedMonth}/>
				<h3>Your birthday month is {month}.</h3>
			</div>
		);
	}
}

export default App;