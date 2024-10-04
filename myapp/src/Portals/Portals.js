import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
function Portals() {
  const [show, setShow] = useState(false);
  function toggleModal() {
    setShow(!show);
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        Open Modal
      </button>
      {show && <Modal close={toggleModal} />}
    </div>
  );
}

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="content">
        <h1>Modal</h1>
        <p>This is a modal</p>
        <p>
          This is a modal A paragraph is a group of sentences that discuss a
          single idea or topic. Paragraphs are a conventional way to organize
        </p>
        <button onClick={props.close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Portals;
