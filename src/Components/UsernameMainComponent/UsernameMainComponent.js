import React from "react";

import UsernameSearchComponent from "../UsernameSearchComponent/UsernameSearchComponent";
import Section from "../../Shared/Section/Section";

import './UsernameMainComponent.css';


const UsernameMainComponent = props => {
    return (
        <Section class='username'>
            <UsernameSearchComponent />
        </Section>
    );
}

export default UsernameMainComponent;