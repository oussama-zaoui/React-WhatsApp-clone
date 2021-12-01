import React from 'react';
import './SenderMessage.scss';

function SenderMessage({content}) {
    return (
        <div className='senderContainer'>
            <span className="senderMessage">{content}</span> 
            
        </div>
    );
}

export default SenderMessage;