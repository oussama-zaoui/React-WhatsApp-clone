import React from 'react';
import { useSelector } from 'react-redux';
import ReciverMessage from '../../../Message/ReciverMessage/ReciverMessage';
import SenderMessage from '../../../Message/SenderMessage/SenderMessage';
import './Middle.scss';

function Middle(props) {
    const membersState=useSelector((state)=>state.membersState)
    const messageState=useSelector((state)=>state.messageState)
    const roomState=useSelector((state)=>state.roomState)
    const {currentUserId,choosenId}=roomState
    console.log(choosenId, membersState)
    return (
        <div className="middle">
            <div className='messages'> 
            
            {messageState.map((message)=>{
                debugger
                    if(message.owner===currentUserId && membersState.includes(choosenId) ){
                        return <SenderMessage content={message.content} />
                    }else if(message.owner===choosenId)
                        return <ReciverMessage content={message.content}/>
                    return null
                  
                   
                })}
            </div>
             
           
        </div>
    );
}

export default Middle;