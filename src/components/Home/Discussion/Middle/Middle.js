import React from 'react';
import { useSelector } from 'react-redux';
import ReciverMessage from '../../../Message/ReciverMessage/ReciverMessage';
import SenderMessage from '../../../Message/SenderMessage/SenderMessage';
import './Middle.scss';

function Middle(props) {
    const messageState=useSelector((state)=>state.messageState)
    const roomState=useSelector((state)=>state.roomState)
    const {currentUserId,choosenId}=roomState
    return (
        <div className="middle">
            <img src='https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png' alt=''/>
            <div>
            {messageState.map((message)=>{
                    if(message.owner===currentUserId){
                        return <SenderMessage conntent={message.content} />
                    }else
                    return <ReciverMessage content={message.content}/>
                })}
            </div>
             
           
        </div>
    );
}

export default Middle;