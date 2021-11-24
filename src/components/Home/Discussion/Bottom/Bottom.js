import { AttachFile, InsertEmoticon, KeyboardVoice } from '@mui/icons-material';
import React from 'react';
import './Bottom.scss';

function Bottom(props) {
    return (
        <div className='bottom'>
            <div>
                <InsertEmoticon />
                <AttachFile className='attach' />
                <input placeholder="write message" />
            </div>
            <KeyboardVoice />
        </div>
    );
}

export default Bottom;