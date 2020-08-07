import React from 'react'
import { DCRadioButton } from 'components/DCRadioButton'

import './DCRadioButtonGroup.scss'

export const DCRadioButtonGroup = (props) => {
    const { group, value, name, ...otherProps } = props

    return (
        <div className="DCRadioButtonGroup">
            {group &&
                group.map(({ label }, idx) => (
                    <DCRadioButton
                        key={idx}
                        // col={5}
                        label={label}
                        {...otherProps}
                        name={name + idx}
                        checked={value.includes(label)}
                        data-value={label}
                    />
                ))}
        </div>
    )
}
