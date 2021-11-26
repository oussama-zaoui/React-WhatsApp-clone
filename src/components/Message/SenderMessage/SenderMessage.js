import React from 'react';
import './SenderMessage.scss';

function SenderMessage({content}) {
    return (
        <div className='messageContainer'>
            <span className='message'>{content}</span> 
            
        </div>
    );
}

export default SenderMessage;