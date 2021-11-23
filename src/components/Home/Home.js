import React, { useState } from 'react';
import './Home.scss';
import Modal from '../UI/modal/Modal'
import OptionBar from './Optionbar/OptionBar';
import Image from '../../assets/telephone.png'
import Discussion from './Discussion/Discussion';
import User from './User/User';
function Home(props) {
    const[discussionClicked,setDiscussionClicked]=useState(false);
    const discussionClickHandler=()=>{
        setDiscussionClicked(true)
    }
    return (
       <Modal>
        <div className="card">
        
            <div className='left'>
          
                   <OptionBar />
                   <User onClick={discussionClickHandler} username='Charlene nene' image='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
                    <User username=" Salim" image="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                 </div>
                 {discussionClicked ? <Discussion /> :   <div className='right'>
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