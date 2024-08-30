import React from 'react';

function Modal() {
  return (
    <div id="cartModal" className="modalcontainer">
      <div className="modalbody">
        <div className="modal-content">
          <p classname="close" onClick={onClose}>&times;</p>
          <h1>Modal Title</h1>
          <p>Modal Description</p>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;
