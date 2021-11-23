import React from 'react';
import reactDom from 'react-dom';
import './Modal.scss';



function Backdrop(props) {
    
    return <div className="backdrop" />;
  }
  
  function ModalOverlay(props) {
    return (
      <div className="modal">
        <div className="content">{props.children}</div>
      </div>
    );
  }
  
  function Modal(props) {
    const overlay = document.getElementById('overlays');
    return (
      <div>
        {reactDom.createPortal(<Backdrop />, overlay)}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
      </div>
    );
  }

  export default Modal;