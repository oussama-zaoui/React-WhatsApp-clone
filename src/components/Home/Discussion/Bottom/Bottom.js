import { AttachFile, InsertEmoticon, KeyboardVoice, Send } from '@mui/icons-material';
import React, { useState, useEffect, useCallback } from 'react';
import './Bottom.scss';
import { io } from 'socket.io-client';
import { ALL_MESSAGES } from '../../../../store/store';
import { useDispatch } from 'react-redux';



const SERVER = 'https://whatussop.herokuapp.com/'

function Bottom(props) {
    const [isTyping, setIsTyping] = useState(false);
    const [messageInputValue, setMessageInputValue] = useState('')
    const [socket, setSocket] = useState(null);
    //const roomState = useSelector((state) => state.roomState)
    const currentUserId = sessionStorage.getItem('currentUser');
    const choosenId = sessionStorage.getItem('choosenId')
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
                if (message && message.to === currentUserId) {
                    dispatch({ type: ALL_MESSAGES, data: message })
                }

                //console.log(message)
            })
    }, [dispatch, socket, currentUserId])

    useEffect(() => {
        reciveMessage()
    }, [reciveMessage])



    const sendMessage = async () => {

        const roomState = { currentUserId, choosenId }
        socket.emit('currentRoom', roomState)
        let messageBundle = null
        if (messageInputValue)
            messageBundle = { owner: currentUserId, content: messageInputValue, to: choosenId, date: new Date() }
        if (messageBundle) {
            socket.emit('message', messageBundle, socket.id)
            dispatch({ type: ALL_MESSAGES, data: messageBundle })
        }

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