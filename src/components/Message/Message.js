import React from 'react';
import './Message.scss';

function Message({ content, reference, isOwner, isReciver }) {



    return (<div ref={reference} className='messageContainer'>
        {isOwner && <span className='sender'>{content}</span>}
        {isReciver && <span className='reciver'>{content}</span>}


    </div>)



}
export default Message;