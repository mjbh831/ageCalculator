import React from 'react';

const BdayDisplay = ({month, day, year}) => {

	const moment = require('moment');
	
		return (
			<div>
			{moment().fromNow()}
			</div>
		);
}

export default BdayDisplay;
