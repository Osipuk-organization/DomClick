import React from 'react';
import { DCButton } from 'components/DCButton';

import './DCAttachement.scss';

export const DCAttachement = (props) => {
	const {
		dragNdrop,
		...otherProps
	} = props;

	const classes = {
		'DCAttachement': true
	};


	return (
		<div className="DCAttachement" {...dragNdrop} >
			<input {...otherProps} />
			<DCButton
				active
				label="Выберите файл"
			/>
			<span>или перетащите в область</span>
		</div>
	)
};