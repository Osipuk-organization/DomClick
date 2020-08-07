import React from 'react';
import { DCButton } from 'components/DCButton';

import './DCAttachement.scss';

export const DCAttachement = (props) => {

	const {
		size
	} = props;
	
	const classes = {
		'DCAttachement': true
	};
	
	return (
		<div className="DCAttachement">
			<input {...props} id="file-input" type="file" multiple />
			<DCButton
				active
				label="Выберите файл"
			/>
			<span>или перетащите в область</span>
		</div>
	)
};