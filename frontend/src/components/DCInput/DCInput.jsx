import React from "react";

export const DCInput = (props) => {
	const {
		label,
		borderBottomColor,
		size,
		...otherProps
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
			{...otherProps}
		/>
	)
};
