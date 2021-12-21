import React from 'react';
import './Discussion.scss';
import Header from './Header/Header';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';




function Discussion({ name }) {
    //const userState = useSelector((state) => state.getUsersState)
    // const roomState = useSelector((state) => state.roomState);
    //const choosenId = sessionStorage.getItem('choosenId')


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