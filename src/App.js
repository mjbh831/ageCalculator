import React, { Component } from 'react';
import MonthInput from './MonthInput';
import DayInput from './DayInput';


class App extends Component {

	constructor() {
		super();
		this.state = {
			monthInput: '',
			dayInput: ''
		}
	}

	selectedMonth = (event) => {
		this.setState({monthInput: event.target.value})
	}

	selectedDay = (event) => {
		this.setState({dayInput: event.target.value})
	} 

	render() {
		return (
			<div>
				<h1>How old are YOU?</h1>
				<h2>Enter your DOB:</h2>
				<MonthInput monthSelected= {this.selectedMonth}/>
				<h3>Your birthday month is {this.state.monthInput}.</h3>
				<DayInput daySelected= {this.selectedDay} month= {this.state.monthInput} />
				<h3>Your birth day is {this.state.dayInput}.</h3>
			</div>
		);
	}
}

export default App;