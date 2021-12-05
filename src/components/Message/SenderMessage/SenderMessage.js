import React, { useEffect } from 'react';
import './SenderMessage.scss';

function SenderMessage({ content, reference }) {

    // useEffect(() => {
    //     if (ref)
    //         ref.scrollIntoView()
    // }, [ref])


    return (<div ref={reference} className='senderContainer'>
        <span className="senderMessage">{content}</span>

    </div>)



}

export default SenderMessage;

