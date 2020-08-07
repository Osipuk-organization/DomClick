import React from 'react';
import { DCCheckbox } from 'components/DCCheckbox';

import './DCCheckboxGroup.scss';

export const DCCheckboxGroup = (props) => {
	const {
		group,
		value,
		name,
		...otherProps
	} = props;

	return (
		<div className="DCCheckboxGroup">
			{group && group.map(({label}, idx) =>
				<DCCheckbox
					key={idx}
					col={5}
					label={label}
					{...otherProps}
					name={name+idx}
					checked={value.includes(label)}
					data-value={label}
				/>
			)}
		</div>
	)
};