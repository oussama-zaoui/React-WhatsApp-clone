import React from 'react';
import './Home.scss';
import Modal from '../UI/modal/Modal'
import OptionBar from './Optionbar/OptionBar';
function Home(props) {
    return (
       <Modal>
        <div className="card">
        
            <div className='left'>
          
                   <OptionBar />
                
                 </div>
                 <div className='right'>
                     <span>Gardez votre Telephone connecté </span>
                 </div>
        </div>
       </Modal>
    );
}

export default Home;