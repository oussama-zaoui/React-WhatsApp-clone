import { AttachFile, InsertEmoticon, KeyboardVoice, Send } from '@mui/icons-material';
import React, { useState,useEffect } from 'react';
import './Bottom.scss';
import { io } from 'socket.io-client';


const SERVER='https://87fe-41-98-107-25.ngrok.io'
function Bottom(props) {
    const [isTyping,setIsTyping]=useState(false);
    const [messageInputValue,setMessageInputValue]=useState('')
    const [socket, setSocket] = useState(null);

    useEffect(() => {
      const newSocket = io(SERVER);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);
    const messageInputHandler=(e)=>{
        setMessageInputValue(e.target.value)
            if(e.target.value.length>0){
                setIsTyping(true)
                
            }else
            setIsTyping(false)

    }
    
    const sendMessage=async()=>{
        console.log('chekla')
      socket.emit('message',messageInputValue)
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