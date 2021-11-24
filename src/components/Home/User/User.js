import { ArrowDropDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './User.scss';

function User({username,image,time,onClick,id}) {
    const exceute=()=>{
        onClick(id)
    }
    return (
        <div className='userContainer' onClick={exceute}>
            <div className='userLeft'>
            <Avatar className='userAvatar' src={image}/> 
            <div>
                <span className="username">{username}</span>
                <span>last recived message</span>
                </div>   
            </div>
                   <div className='rightSide'>
                       <span>12/12/2012</span>
                       <ArrowDropDown className='arrowDropDown' />
                   </div>
        </div>
    );
}

export default User;