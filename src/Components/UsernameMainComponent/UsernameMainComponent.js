import React from "react";
import { useSelector } from "react-redux";

import UsernameSearchComponent from "../UsernameSearchComponent/UsernameSearchComponent";
import Section from "../../Shared/Section/Section";
import Spinner from '../../Shared/Spinner/Spinner';
import Modal from '../../Shared/Modal/Modal';

import './UsernameMainComponent.css';


const UsernameMainComponent = props => {

    const modalActive = useSelector(state => state.modalStatus.modalIsActive);

    const { isLoading, error, message } = useSelector(state => state.fetchingStatus);

    return (
        <Section class={`${isLoading ? 'username--loading' : ''}`}>
            {isLoading ? < Spinner /> :
                modalActive && error ? <Modal
                    messageHeading='Error'
                    mainMessage={message}
                    classHeading='modal__heading--alert'
                /> :
                    <UsernameSearchComponent />
            }
        </Section>
    );
}

export default UsernameMainComponent;