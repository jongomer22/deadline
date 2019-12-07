import React from "react";
// import Modal from 'react-bootstrap/Modal';


import '../styles/modal.scss';





// class ErrModal extends React.Component {
//   render() {
//     if (!this.props.show === false) {
//       return null;
//     }
//     else return <div>
//     <div className="err-modal">
//       <p>passwords must be between 7 and 15 characters, containing at least one numeric digit & one special character</p>
//     </div>
//     <div>
//       <button
//         // onClick = {()=> closeModal()
//         // }
//         >
      
//         Close
//       </button>
      
//     </div>
//   </div>
//   }
// }

// export default ErrModal

class ErrModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-overlay">
        <div className="modal-container">
      <div className="err-modal" id="modal">
        <h2>Incorrect password format.</h2>
        <div className="modal-content">
          <p>Passwords must be between 7 and 15 characters, containing at least one numeric digit & one special character</p>
        </div>
        <div className="modal-actions">
          <button className="button toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default ErrModal