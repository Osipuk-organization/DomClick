import React from 'react';

import './DCButton.scss';

const DCButton = (props) => {
	const {
		id,
		rounded,
		active,
		label,
		changeActiveButtonHandler
	} = props;
	
	const classes = {
		'DC-button': true,
		'DC-button-rounded': !!rounded,
		'DC-button-active': !!active
	};
	
	const onClickHandler = () => {
		changeActiveButtonHandler(id);
	};
	
	return (
		<div
			className={Object.keys(classes).filter(key => classes[key]).join(' ')}
			onClick={onClickHandler}
		>
			{label}
		</div>
	)
};

export default DCButton;