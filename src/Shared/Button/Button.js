import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <button
            onClick={props.click}
            type={props.type}
            className={`button ${props.class}`}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            value={props.value}>
            {props.text}
        </button>
    );
}

export default Button;