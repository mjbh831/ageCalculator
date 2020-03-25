import React, { Component } from 'react';
import MonthInput from './MonthInput';
import DayInput from './DayInput';
import YearInput from './YearInput';
import BdayDisplay from './BdayDisplay';
import './App.css';


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
			<div className='tc center pa3 ph5-ns' id='box'>
				<h1>How old are YOU?</h1>
				<h2>Enter your DOB:</h2>
				<div id='inputs'>

					<div className= 'pa1'>
						<MonthInput monthSelected= {this.selectedMonth}/>
					</div>
					<div className= 'pa1'>
						<DayInput daySelected= {this.selectedDay} month= {this.state.monthInput} />
					</div>
					<div className= 'pa1'>
						<YearInput yearSelected= {this.selectedYear}/>
					</div>

				</div>
				
				
				<h2 className='pa5'><BdayDisplay month= {this.state.monthInput} day= {this.state.dayInput} year= {this.state.yearInput}/></h2>
			</div>
		);
	}
}

export default App;