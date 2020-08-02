import React from 'react';

const DCCheckbox = (props) => {
	const {
		name,
		label,
		value,
		size,
		bold,
		col
	} = props;
	
	const classes = {
		'DCCheckbox' : true,
		[`DCCheckbox__size_${size ? size : 'default'}`]: true,
		[`DCCheckbox_bold`]: !!bold,
		[`_col-${col}`]: !!col
	};
	
	return(
		<div className={Object.keys(classes).filter(key => classes[key]).join(' ')}>
			<input type="checkbox" id={name} name={name} value={value} />
			<label htmlFor={name}>{label}</label>
		</div>
	)
};

export default DCCheckbox;