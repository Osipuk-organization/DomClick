import React from 'react';

const DCLabel = (props) => {
	const {
		children,
		label,
		withComment,
		fontSize,
		size
	} = props;
	const classes = {
		'DC-label': true,
		[`DC-label-size-${fontSize}`]: !!fontSize,
	};
	
	return (
		<label className={Object.keys(classes).filter(key => classes[key]).join(' ')}>
			<span>
				{label}
				{withComment && <div className='commentSpan'>Комментарии</div>}
			</span>
			{children}
		</label>
	)
};

export default DCLabel;