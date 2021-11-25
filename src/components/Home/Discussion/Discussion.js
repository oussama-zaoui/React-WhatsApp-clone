import React, { useCallback, useEffect } from 'react';
import './Discussion.scss';
import Header from './Header/Header';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import { useSelector } from 'react-redux';


function Discussion({choosenId}) {
    const userState=useSelector((state)=>state.getUsersState)
    const currentUserId=101;
    let messages=[]
    const fetchDiscussion=useCallback(async()=>{
            const response =await fetch(`https://87fe-41-98-107-25.ngrok.io/findDiscussion/${currentUserId}/${choosenId}`)
            if(!response.ok){
                throw new Error('could not fetch')
            }
            const data=await response.json()
            if(!data) return ;
             messages=data.messages;
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
            <Middle  messages={messages}/>
            <Bottom />
        </div>
    );
}

export default Discussion;