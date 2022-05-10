import React, { useState, useEffect } from "react";
import axios from 'axios';

import Input from "../../Shared/Input/Input";
import UsernameFoundComponent from "../UserNameFoundComponent/UsernameFoundComponent";

import './UsernameSearchComponent.css';

const UsernameSearchComponent = props => {
    const [inputValue, setInputValue] = useState('');

    const [usernames, setUsernames] = useState([]);

    const [usernameMatch, setUsernameMatch] = useState();



    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsernames(response.data);
        }
        fetchUsernames();
    }, []);


    const searchUserNameHandler = e => {
        const lettersTyped = e.target.value;
        setInputValue(lettersTyped);
        let matchedUsernames = [];
        if (lettersTyped) {
            matchedUsernames = usernames.filter(username => username.username.toLowerCase().startsWith(lettersTyped.toLowerCase()));
        }
        setUsernameMatch(matchedUsernames);
    }

    const matchedUserPicked = e => {
        const userPickedId = e.target.id;
        const userPicked = usernameMatch.filter(user => user.id.toString() === userPickedId.toString());
        Array.isArray(userPicked) && userPicked.length > 0 && setInputValue(userPicked[0].username);
        setUsernameMatch([]);
    }


    let matchedUsers;
    if (usernameMatch) {
        matchedUsers = usernameMatch.map(userMatch => (
            <UsernameFoundComponent
                key={userMatch.id}
                matchedUsername={userMatch.username}
                click={matchedUserPicked}
                id={userMatch.id}
                lettersTyped={inputValue}
            />
        ));
    }

    return (
        <div className="username__input-wrapper">
            <Input
                inputType='input'
                placeholder='Type username here'
                id='username-input'
                label='Start searching a user'
                classLabel='username__label'
                class='username__input'
                change={searchUserNameHandler}
                value={inputValue}
            />
            {matchedUsers}
        </div>
    );
}

export default UsernameSearchComponent;