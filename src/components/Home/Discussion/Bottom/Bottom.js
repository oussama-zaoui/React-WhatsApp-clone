import { AttachFile, InsertEmoticon, KeyboardVoice, Send } from '@mui/icons-material';
import React, { useState, useEffect, useCallback } from 'react';
import './Bottom.scss';
import { io } from 'socket.io-client';
import { ALL_MESSAGES } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';



const SERVER = 'https://whatussop.herokuapp.com/'

function Bottom(props) {
    const [isTyping, setIsTyping] = useState(false);
    const [messageInputValue, setMessageInputValue] = useState('')
    const [socket, setSocket] = useState(null);
    const roomState = useSelector((state) => state.roomState)
    const dispatch = useDispatch();

    useEffect(() => {
        const newSocket = io(SERVER);
        setSocket(newSocket);
        return function cleanup() {
            newSocket.disconnect()
        }
    }, [setSocket]);
    const messageInputHandler = (e) => {
        setMessageInputValue(e.target.value)
        if (e.target.value.length > 0) {
            setIsTyping(true)

        } else
            setIsTyping(false)

    }
    const onkeypressHandler = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    const reciveMessage = useCallback(async () => {
        debugger
        if (socket)
            socket.on('recive', (message) => {
                if (message) {
                    dispatch({ type: ALL_MESSAGES, data: message })
                }

                //console.log(message)
            })
    }, [dispatch, socket])

    useEffect(() => {
        reciveMessage()
    }, [reciveMessage])



    const sendMessage = async () => {
        debugger
        socket.emit('currentRoom', roomState)
        const messageBundle = { owner: roomState.currentUserId, content: messageInputValue, date: new Date() }
        socket.emit('message', messageBundle, socket.id)
        dispatch({ type: ALL_MESSAGES, data: messageBundle })
        setMessageInputValue('')


    }
    return (
        <div className='bottom'>
            <div>
                <InsertEmoticon />
                <AttachFile className='attach' />
                <input placeholder="write message" value={messageInputValue} onChange={messageInputHandler} onKeyPress={onkeypressHandler} />
            </div>
            {isTyping ? <Send onClick={sendMessage} /> : <KeyboardVoice />}

        </div>
    );
}

export default Bottom;