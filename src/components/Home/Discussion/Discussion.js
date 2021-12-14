import React from 'react';
import './Discussion.scss';
import Header from './Header/Header';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import { useSelector } from 'react-redux';



function Discussion() {
    const userState = useSelector((state) => state.getUsersState)
    // const roomState = useSelector((state) => state.roomState);
    const choosenId = localStorage.getItem('choosenId')
    const user = userState.filter((user) => user._id === choosenId)
    const { name } = user[0];
    console.log(name)
    debugger
    return (
        <div className="discussion">
            <Header name={name} />
            <Middle />
            <Bottom />
        </div>
    );
}

export default Discussion;