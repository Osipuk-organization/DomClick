import React from 'react';
import DCLabel from '../DCLabel/DCLabel';
import './style.scss';
import DCInput from '../DCInput/DCInput';

const DCInputField = (props) => {
	const {
		children,
		label,
		size,
		withComment,
		labelSize
	} = props;
	
	const inputFieldClasses = {
		'DC-inputField': true,
		[`_col-${size}`]: !!size
	};
	
	return (
		<div className={Object.keys(inputFieldClasses).filter(key => inputFieldClasses[key]).join(' ')}>
			<DCLabel label={label} withComment={withComment} size={labelSize}>
				{children}
			</DCLabel>
		</div>
	)
};

export default DCInputField;