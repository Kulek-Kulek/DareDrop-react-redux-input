import React from "react";
import { useSelector } from "react-redux";

import './UsernameFoundComponent.css';

const UsernameFoundComponent = props => {

    const lettersTyped = useSelector(state => state.inputState.lettersTyped);


    const boldLetters = lettersTyped.substring(1, lettersTyped.length);
    const letters = props.matchedUsername.slice(lettersTyped.length);
    const firstLetter = props.matchedUsername.charAt(0).toUpperCase(0);


    return (
        <span
            className="username__match"
            onClick={props.click}
            id={props.id}
        >
            <b>{firstLetter + boldLetters}</b>{letters}
        </span>
    );
}

export default UsernameFoundComponent;