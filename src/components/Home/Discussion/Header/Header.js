import React from 'react';
import { Avatar } from '@mui/material';
import './Header.scss';
import { MoreVert, Search } from '@mui/icons-material';

function Header({name}) {
    return (
        <div className='headerContainer'>
        <div className='headerLeft'>
        <Avatar className='headerAvatar'/> 
        <div >
            <span className="username">{!name ? 'flenn' : name }</span>
            <span>last seen at 17:50</span>
            </div>   
        </div>
               <div className='headerRight'>
                   <Search />
                   <MoreVert />
                {/*some actions */}
               </div>
    </div>
    );
}

export default Header;