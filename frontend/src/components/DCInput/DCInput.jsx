import React from 'react';

const DCInput = (props) => {
	const {
		label,
		borderBottomColor,
		size
	} = props;
	
	const inputClasses = {
		'DC-input': true,
		[`DC-input-border-color-${borderBottomColor}`]: !!borderBottomColor,
		[`_col-${size}`]: !!size
	};
	
	return (
		<input
			className={Object.keys(inputClasses).filter(key => inputClasses[key]).join(' ')}
			placeholder="Впишите сюда"
		/>
	)
};

export default DCInput;