import React from 'react';
import './ReciverMessage.scss'

function ReciverMessage({content}) {
    return (
        <div className='reciverContainer'>
        <span className='reciverMessage' >{content}</span> 
        
    </div>
    );
}

export default ReciverMessage;