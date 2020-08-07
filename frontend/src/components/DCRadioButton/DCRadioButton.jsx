import React from 'react'

import './DCRadioButton.scss'

export const DCRadioButton = (props) => {
    const { name, label, value, size, bold, col, ...otherProps } = props

    const classes = {
        DCRadio: true,
        [`DCRadio__size_${size ? size : 'default'}`]: true,
        [`DCRadio_bold`]: !!bold,
        [`_col-${col}`]: !!col,
    }

    return (
        <div
            className={Object.keys(classes)
                .filter((key) => classes[key])
                .join(' ')}
        >
            <input id={name} type="radio" {...otherProps} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
};
