import React, { useEffect } from 'react';
import './ReciverMessage.scss'

function ReciverMessage({ content, reference }) {

    // useEffect(() => {
    //     if (ref)
    //         ref.scrollIntoView()
    // }, [ref])


    return (<div ref={reference} className='reciverContainer'>
        <span className='reciverMessage' >{content}</span>

    </div>)



}

export default ReciverMessage;

