import React from "react";

import './UsernameFoundComponent.css';

const UsernameFoundComponent = props => {
    const boldLetters = props.lettersTyped.substring(0, props.lettersTyped.length);
    const letters = props.matchedUsername.slice(props.lettersTyped.length);


    return (
        <span
            className="username__match"
            onClick={(e) => props.click(e)}
            id={props.id}
        >
            <b>{boldLetters}</b>{letters}
        </span>
    );
}

export default UsernameFoundComponent;