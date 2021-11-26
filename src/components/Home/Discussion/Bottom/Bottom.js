import { AttachFile, InsertEmoticon, KeyboardVoice, Send } from '@mui/icons-material';
import React, { useState,useEffect } from 'react';
import './Bottom.scss';
import { io } from 'socket.io-client';
import { ALL_MESSAGES, CURRENT_USER } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';


const SERVER='https://d796-41-96-32-68.ngrok.io'
function Bottom(props) {
    const [isTyping,setIsTyping]=useState(false);
    const [messageInputValue,setMessageInputValue]=useState('')
    const [socket, setSocket] = useState(null);
    const roomState=useSelector((state)=>state.roomState)
    const dispatch=useDispatch();
   

    useEffect(() => {
      const newSocket = io(SERVER);
      setSocket(newSocket);
      //return () => newSocket.close();
    }, [setSocket]);
    const messageInputHandler=(e)=>{
        setMessageInputValue(e.target.value)
            if(e.target.value.length>0){
                setIsTyping(true)
                
            }else
            setIsTyping(false)

    }
    
    const sendMessage=async()=>{
      socket.emit('currentRoom',roomState)
      const messageBundle={owner:roomState.currentUserId,content:messageInputValue, date:new Date()}
      socket.emit('message',messageBundle,socket.id)
      dispatch({type:ALL_MESSAGES,data:messageBundle})
      socket.on('recive',(message)=>{
        dispatch({type:ALL_MESSAGES,data:message})
            console.log(message)
      })
    
    }
    return (
        <div className='bottom'>
            <div>
                <InsertEmoticon />
                <AttachFile className='attach' />
                <input placeholder="write message" value={messageInputValue} onChange={messageInputHandler} />
            </div>
            {isTyping ? <Send onClick={sendMessage} /> :  <KeyboardVoice />}
           
        </div>
    );
}

export default Bottom;