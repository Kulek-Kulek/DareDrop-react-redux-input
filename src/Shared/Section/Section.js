import React from "react";

import './Section.css';

const Section = props => {
    return (
        <section className={`section ${props.class ? props.class : ''}`} id={props.id}>{props.children}</section>
    );
}

export default Section;