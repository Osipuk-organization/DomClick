import React from 'react';
import { DCLabel } from 'components/DCLabel';
import './DCInputField.scss';

export const DCInputField = (props) => {
	const {
		children,
		label,
		size,
		withComment,
		labelSize,
		fullWith,
		labelColor,
		noBackground
	} = props;
	
	const inputFieldClasses = {
		'DC-inputField': true,
		'_col-12': !!fullWith
	};
	
	return (
		<div className={Object.keys(inputFieldClasses).filter(key => inputFieldClasses[key]).join(' ')}>
			<DCLabel
				label={label}
				withComment={withComment}
				fontSize={labelSize}
				size={size}
				noBackground={noBackground}
				color={labelColor}
			>
				{children}
			</DCLabel>
		</div>
	)
};