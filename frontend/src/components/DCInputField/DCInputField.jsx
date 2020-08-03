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
		labelSize,
		fullWith
	} = props;
	
	const inputFieldClasses = {
		'DC-inputField': true,
		'_col-12': !!fullWith
	};
	
	return (
		<div className={Object.keys(inputFieldClasses).filter(key => inputFieldClasses[key]).join(' ')}>
			<DCLabel label={label} withComment={withComment} fontSize={labelSize} size={size}>
				{children}
			</DCLabel>
		</div>
	)
};

export default DCInputField;