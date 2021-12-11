import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { CURRENT_USER } from '../store/store';

import './Login.scss';

function Login(props) {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    const submitHandler = async () => {
        try {
            const response = await fetch(`https://whatussop.herokuapp.com/findUser/${username}`)
            if (!response.ok) {
                throw new Error('error')
            }
            const data = await response.json()
            if (data) {
                dispatch({ type: CURRENT_USER, data: data._id })
                navigate('/home')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <input type='text' placeholder="username" value={username} onChange={usernameChangeHandler} />
            <button onClick={submitHandler}>submit</button>
        </div>
    );
}

export default Login;