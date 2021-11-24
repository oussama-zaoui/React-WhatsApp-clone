import React from 'react';
import './Discussion.scss';
import Header from './Header/Header';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import { useSelector } from 'react-redux';

function Discussion({choosenId}) {
    const userState=useSelector((state)=>state.getUsersState)
    console.log(choosenId)
    console.log(userState)
    const user=userState.filter((user)=>user._id===choosenId)
     const {name}=user[0];
    console.log(name)
    return (
        <div className="discussion">
            <Header name={name} />
            <Middle />
            <Bottom />
        </div>
    );
}

export default Discussion;