import React from 'react';

const MonthInput = ({monthSelected}) => {

	const months = [ 
		'Select one',
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
		];

	return (
		<div>
			<label htmlFor="month"> Month: </label>
			<select name="month" required onChange={monthSelected}>
				{months.map( (month, i) => <option key={i} value={i}>{month}</option>)}
			</select>
		</div>
	);
}

export default MonthInput;
