import "./style.css";

function Modal(props) {
    if(!props.show){
        return null
    }

  return (
    <>
      <div className="modal" >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Complimenti</h4>
          </div>
          <div className="modal-body">Hai aggiunto un nuovo film!</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
