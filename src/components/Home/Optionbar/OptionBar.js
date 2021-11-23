import { Chat, DataSaverOff, MoreVert } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './OptionBar.scss';

function OptionBar(props) {
    return (
        <div className="optionBarContainer">
            <Avatar className='avatar' />
            <div className="options">
                <DataSaverOff />
                <Chat />
                <MoreVert />
            </div>
        </div>
    );
}

export default OptionBar;