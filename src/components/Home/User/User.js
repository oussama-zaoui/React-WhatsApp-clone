import { ArrowDropDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './User.scss';

function User({username,image,time,onClick}) {
    return (
        <div className='userContainer' onClick={onClick}>
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