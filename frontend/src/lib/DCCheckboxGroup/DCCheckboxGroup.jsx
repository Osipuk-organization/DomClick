import React from 'react';
import DCCheckbox from '../DCCheckbox/DCCheckbox';

const DCCheckboxGroup = (props) => {
	const {
		group
	} = props;
	return (
		<div className="DCCheckboxGroup">
			{group && group.map((item, id) =>
				<DCCheckbox
					key={id}
					col={4}
					{...item}
				/>
			)}
		</div>
	)
};

export default DCCheckboxGroup;