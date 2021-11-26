import React, { useCallback, useEffect } from 'react';
import './Discussion.scss';
import Header from './Header/Header';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import { useDispatch, useSelector } from 'react-redux';
import { ALL_MESSAGES } from '../../../store/store';


function Discussion() {
    const userState=useSelector((state)=>state.getUsersState)
    const dispatch=useDispatch();
    
    const roomState=useSelector((state)=>state.roomState);
    const {currentUserId,choosenId}=roomState
    const fetchDiscussion=useCallback(async()=>{
        console.log('this is current userId ',currentUserId)
            const response =await fetch(`https://d796-41-96-32-68.ngrok.io/findDiscussion/${currentUserId}/${choosenId}`)
            if(!response.ok){
                throw new Error('could not fetch')
            }
            const data=await response.json()
            if(!data) return ;
            console.log(data)
             dispatch({type:ALL_MESSAGES,data:data.messages})
    },[])
    
    useEffect(()=>{
        fetchDiscussion()
    },[fetchDiscussion])
    const user=userState.filter((user)=>user._id===choosenId)
     const {name}=user[0];
    console.log(name)
    return (
        <div className="discussion">
            <Header name={name} />
            <Middle  />
            <Bottom />
        </div>
    );
}

export default Discussion;