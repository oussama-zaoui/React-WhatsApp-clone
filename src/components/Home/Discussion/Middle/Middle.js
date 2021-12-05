import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Message from '../../../Message/Message';
import ReciverMessage from '../../../Message/ReciverMessage/ReciverMessage';
import SenderMessage from '../../../Message/SenderMessage/SenderMessage';
import './Middle.scss';

function Middle(props) {
    const membersState = useSelector((state) => state.membersState)
    const messageState = useSelector((state) => state.messageState)
    const roomState = useSelector((state) => state.roomState)
    const lastRef = useRef(null)
    const { currentUserId, choosenId } = roomState
    console.log(choosenId, membersState)

    useEffect(() => {
        if (lastRef.current)
            lastRef.current.scrollIntoView()
    })
    const generateMessages = () => (
        messageState.map((message, index) => (

            <Message reference={index + 1 === messageState.length ? lastRef : null} content={message.content} isOwner={message.owner === currentUserId} />

            // if (message.owner === currentUserId) {
            //     // if (messageState.length === currentIndex) {
            //     //     console.log("index and length are the same here ...", messageState.length, currentIndex)

            //     //     return <SenderMessage ref={lastRef} content={message.content} />
            //     // } else


            // } else if (message.owner === choosenId) {
            //     return <ReciverMessage reference={currentIndex === messageState.length ? lastRef : null} content={message.content} />

            // }
            // // if (messageState.length === currentIndex) {

            // //     console.log("index and length are the same here ...", messageState.length, currentIndex)
            // //     return <ReciverMessage ref={lastRef} content={message.content} />
            // // } else

            // return null


        ))

    )
    return (
        <div className="middle">

            {generateMessages()}

        </div>
    );
}

export default Middle;