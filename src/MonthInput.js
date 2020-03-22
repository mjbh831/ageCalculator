import React from 'react';

const MonthInput = ({monthSelected}) => {

	const month = [ 
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
				{month.map( (month, i) => <option key={i} value={month}>{month}</option>)}
			</select>
		</div>
	);
}

export default MonthInput;
