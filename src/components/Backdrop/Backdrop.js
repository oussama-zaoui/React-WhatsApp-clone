import React from 'react';
import './Backdrop.scss';

function Backdrop(props) {
    return (
        <div className="appBar" >
            <div className='logoContainer'>
                <img src="https://img.icons8.com/color/96/000000/whatsapp--v1.png" alt="" />
                <span>WHATSAPP WEB</span>
            </div>
            <div className='searchBar'>
                {props.children}
            </div>
        </div>
    );
}

export default Backdrop;