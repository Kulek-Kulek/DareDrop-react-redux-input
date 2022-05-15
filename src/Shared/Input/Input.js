import React from 'react';

import './Input.css';

const Input = props => {

    let inputType;
    switch (props.inputType) {
        case 'input':
            inputType = <input
                id={props.id}
                name={props.name}
                type={props.type}
                required={props.required}
                accept={props.type === 'file' ? props.accept : null}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.change}
                disabled={props.disabled}
                className={props.class}
            />
            break;
        default: inputType = <textarea
            id={props.id}
            rows={props.rows || 4}
            required={props.required}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.change}
            className={props.class} />
    }



    return (
        <>
            {props.label && <label className={props.classLabel} htmlFor={props.id}>{props.label}</label>}
            {inputType}
        </>
    );
}

export default Input;