import React, { useEffect, useState,useCallback } from 'react';
import './Home.scss';
import Modal from '../UI/modal/Modal'
import OptionBar from './Optionbar/OptionBar';
import Image from '../../assets/telephone.png'
import Discussion from './Discussion/Discussion';
import User from './User/User';
import { useDispatch, useSelector } from 'react-redux';
import {GET_USERS,CLEARE_USERS, SET_CHOOSEN_ID, MEMBERS, ALL_MESSAGES,CLEARE_MESSAGES} from '../../store/store'
require('dotenv').config();


function Home(props) {
    const[discussionClicked,setDiscussionClicked]=useState(false);
    const URL='https://9441-41-97-27-231.ngrok.io';
    const [isLoading,setIsLoading]=useState(false)
    const  [error,setError]=useState('')
   // const [choosenId,setChoosenId]=useState('')
    const userState=useSelector((state)=>state.getUsersState)
    const roomState=useSelector((state)=>state.roomState)
    const {currentUserId}=roomState;
    const dispatch=useDispatch()
    
    const discussionClickHandler=(id)=>{
        //console.log("this is id :", id)
        dispatch({type:SET_CHOOSEN_ID,data:id})
        //setChoosenId(id)
        setDiscussionClicked(true)
        fetchDisscussion(id)
        
    }

   const  fetchDisscussion=async(choosenId)=>{
    debugger
    dispatch({type:CLEARE_MESSAGES})
    console.log('this is current userId ',currentUserId)
        const response =await fetch(`${URL}/findDiscussion/${currentUserId}/${choosenId}`)
        if(!response.ok){
            throw new Error('could not fetch')
        }
        const data=await response.json()
        if(!data) return ;
        console.log(data)
         dispatch({type:MEMBERS,data:data.members})
         dispatch({type:ALL_MESSAGES,data:data.messages})
    }

    const fetchUsers=useCallback(async()=>{
        dispatch({type:CLEARE_USERS})
        setIsLoading(true)
        try{
            const response=await fetch(`${URL}/users/${currentUserId}`)
            console.log('environement variables',process.env.API_URL)
            if(!response.ok){
                throw new Error("could not fetch users correctly")
            }
            const data =await response.json();
            setIsLoading(false)
            dispatch({type:GET_USERS,data:data})
        }catch(error){
            setError(error)
            console.log(error)
        }
    },[dispatch,currentUserId])
 
   
    useEffect(()=>{
      fetchUsers()  
    },[fetchUsers])
    return (
       <Modal>
        <div className="card">
        
            <div className='left'>
          
                   <OptionBar />
                   <User onClick={discussionClickHandler} username='Charlene nene' image='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
                    <User onClick={discussionClickHandler} username=" Salim" image="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                    {isLoading ? <h2>loading...</h2> : error ? <h2>{error}</h2> : userState.map((user)=><User key={user._id} id={user._id} onClick={discussionClickHandler} username={user.name} />)}
                 </div>
                 {discussionClicked ? <Discussion  /> :   <div className='right'>
                     <img src={Image} alt='' />
                     <span>Gardez votre Telephone connecté </span>
                     <div>WhatsApp se connecte à votre téléphone pour synchroniser les messages. Pour réduire </div>
                     <div>l'utilisation de données, connectez votre téléphone à un réseau Wi-Fi.</div>
                 </div>}
               
        </div>
       </Modal>
    );
}

export default Home;