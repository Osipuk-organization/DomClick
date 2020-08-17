import React from 'react';

import './DCCheckbox.scss';

export const DCCheckbox = (props) => {
	const {
		name,
		label,
		value,
		size,
		bold,
		col,
		...otherProps
	} = props;
	
	const classes = {
		'DCCheckbox' : true,
		[`DCCheckbox__size_${size ? size : 'default'}`]: true,
		[`DCCheckbox_bold`]: !!bold,
		[`_col-${col}`]: !!col
	};
	
	return(
		<div className={Object.keys(classes).filter(key => classes[key]).join(' ')}>
			<input id={name} type="checkbox" {...otherProps} />
			<label htmlFor={name}>{label}</label>
		</div>
	)
};