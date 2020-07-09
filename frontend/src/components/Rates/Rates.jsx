import React, {Fragment, useState, useEffect} from 'react';

export const Rates = function(props) {
    //props
    const {myProps} = props;
    //state
    const [name, setName] = useState(null);
    //mount and update effect
    useEffect(function() {
        /* DidMount */
        
        return function() {
            /* Unmount */
        }
    }, []);
    
    return (
        <Fragment>
            /* context */
        </Fragment>
    );
}