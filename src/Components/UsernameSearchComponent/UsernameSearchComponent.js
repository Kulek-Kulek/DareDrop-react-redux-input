import React from "react";
import { useSelector, useDispatch } from "react-redux";


import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import UsernameFoundComponent from "../UserNameFoundComponent/UsernameFoundComponent";
import Modal from '../../Shared/Modal/Modal';
import * as actions from '../../Store/Actions/action-index';

import './UsernameSearchComponent.css';

const UsernameSearchComponent = props => {

    const { matchingUsers, userPicked } = useSelector(state => state.usersData);

    const lettersTyped = useSelector(state => state.inputState.lettersTyped);

    const modalActive = useSelector(state => state.modalStatus.modalIsActive);

    const loadingError = useSelector(state => state.fetchingStatus.error);

    const dispatch = useDispatch();


    const searchUserNameHandler = e => {
        const lettersTyped = e.target.value;
        dispatch(actions.lettersTyped(lettersTyped));
        dispatch(actions.matchingUsers(lettersTyped, false));
    }


    const matchedUserPicked = e => {
        const userPickedId = e.target.id;
        if (userPickedId) {
            dispatch(actions.userPicked(userPickedId));
            dispatch(actions.matchingUsers(null, true));
        }
    }


    const submitUsernameHandler = e => {
        e.preventDefault();
        dispatch(actions.lettersTyped(''));
        dispatch(actions.modalState(true, true));
    }


    let matchedUsers;

    matchedUsers = matchingUsers.map(userMatch => (
        <UsernameFoundComponent
            key={userMatch.id}
            matchedUsername={userMatch.username}
            click={matchedUserPicked}
            id={userMatch.id}
        />
    ));


    return (
        <>
            {modalActive ?
                <Modal
                    classHeading='modal__heading--success'
                    messageHeading='Success'
                    mainMessage='Your form has been submitted. Thank you.'
                /> :
                <div className="username__form-wrapper">
                    <form className="username__form" onSubmit={submitUsernameHandler}>
                        <Input
                            inputType='input'
                            placeholder='Type username here'
                            id='username-input'
                            label='Start searching users'
                            classLabel='username__label'
                            class='username__input'
                            change={searchUserNameHandler}
                            value={userPicked ? userPicked.username : lettersTyped}
                            disabled={loadingError}
                        />
                        <Button
                            type='submit'
                            text='Submit'
                            class='username__button'
                            disabled={loadingError || Object.keys(userPicked).length === 0}
                        />
                    </form>
                    <div className="usernames__matches">
                        {matchedUsers}
                    </div>
                </div>}
        </>
    );
}

export default UsernameSearchComponent;