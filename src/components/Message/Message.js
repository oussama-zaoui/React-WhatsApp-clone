import React from 'react';
import './Message.scss';

function Message({ content, reference, isOwner }) {



    return (<div ref={reference} className='messageContainer'>
        <span className={isOwner ? "sender" : "reciver"}>{content}</span>

    </div>)



}
export default Message;