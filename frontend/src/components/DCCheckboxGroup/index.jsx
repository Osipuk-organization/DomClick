import React from 'react'
import DCCheckbox from '../DCCheckbox'

import './style.scss'

const DCCheckboxGroup = (props) => {
    const { group } = props
    return (
        <div className="DCCheckboxGroup">
            {group &&
                group.map((item, id) => (
                    <DCCheckbox key={id} col={5} {...item} />
                ))}
        </div>
    )
}

export default DCCheckboxGroup
