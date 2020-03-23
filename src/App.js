import React, { Component } from 'react';
import MonthInput from './MonthInput';
import DayInput from './DayInput';
import YearInput from './YearInput';
import BdayDisplay from './BdayDisplay';


class App extends Component {

	constructor() {
		super();
		this.state = {
			monthInput: '',
			dayInput: '',
			yearInput: ''
		}
	}

	selectedMonth = (event) => {
		this.setState({monthInput: event.target.value})
	}

	selectedDay = (event) => {
		this.setState({dayInput: event.target.value})
	} 

	selectedYear = (event) => {
		this.setState({yearInput: event.target.value})
	} 

	render() {
		return (
			<div className='tc'>
				<h1>How old are YOU?</h1>
				<h2>Enter your DOB:</h2>
				<MonthInput monthSelected= {this.selectedMonth}/>
				<h3>Your birthday month is {this.state.monthInput}.</h3>
				<DayInput daySelected= {this.selectedDay} month= {this.state.monthInput} />
				<h3>You were born on day number {this.state.dayInput}.</h3>
				<YearInput yearSelected= {this.selectedYear}/>
				<h3>You were born in year {this.state.yearInput}.</h3>
				<h2 className='pa5'><BdayDisplay month= {this.state.monthInput} day= {this.state.dayInput} year= {this.state.yearInput}/></h2>
			</div>
		);
	}
}

export default App;