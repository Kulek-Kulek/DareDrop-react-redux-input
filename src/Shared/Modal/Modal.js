import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from '../Button/Button';
import * as actions from '../../Store/Actions/action-index';

import './Modal.css';

const MessageSent = props => {
    const dispatch = useDispatch();

    const submitingError = useSelector(state => state.fetchingStatus.error);

    const hideModalHandler = () => {
        dispatch(actions.modalState(false, false));
        !submitingError && dispatch(actions.userPicked());
    }

    return (
        <div className={`modal ${props.class}`}>
            <p className={`modal__heading ${props.classHeading}`}>{props.messageHeading}
            </p>
            <div className='modal__message'>
                <p>{props.mainMessage}</p>
            </div>
            <div className='modal__btn-div'>
                <Button
                    class='modal__button'
                    text='Cancel'
                    click={hideModalHandler}
                />
            </div>
        </div>
    );
}

export default MessageSent;