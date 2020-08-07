import React from 'react';
import { DCCheckbox } from 'components/DCCheckbox';

import './DCCheckboxGroup.scss';

export const DCCheckboxGroup = (props) => {
	const {
		group
	} = props;
	return (
		<div className="DCCheckboxGroup">
			{group && group.map((item, id) =>
				<DCCheckbox
					key={id}
					col={5}
					{...item}
				/>
			)}
		</div>
	)
};