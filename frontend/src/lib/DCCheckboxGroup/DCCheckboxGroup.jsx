import React from 'react';
import DCCheckbox from '../DCCheckbox/DCCheckbox';

const DCCheckboxGroup = (props) => {
	const {
		group
	} = props;
	return (
		<div>
			{group && group.map((item, id) =>
				<DCCheckbox
					key={id}
					{...item}
				/>
			)}
		</div>
	)
};

export default DCCheckboxGroup;