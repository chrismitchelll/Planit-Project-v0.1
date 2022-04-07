import React from "react";
import "./modal.scss";
import axios from "axios";
import closeIcon from "../../../assets/icons/remove.png";

const Modal = ({ onClose, show, objectID, getData, objectName, type }) => {
  // FUNCTION TO DELETE Trip FROM API
  const deleteTripAPI = async (id) => {
    try {
      const deletedTrip = await axios.delete(
        `http://localhost:8888/trips/${id}`
      );
      getData();
      console.log(deletedTrip);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    console.log(objectID, "objectID through props");
    deleteTripAPI(objectID);
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <aside className="modal" onClick={onClose}>
      <section
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close" onClick={onClose}>
          Close
          {/* <img
            className="modal__icon"
            src={closeIcon}
            alt="close icon"
            onClick={onClose}
          /> */}
        </div>
        <div className="modal__header">
          <h1 className="modal__title">{`Delete ${objectName} ${type}?`}</h1>
          {type === "inventory" ? (
            <h1 className="modal__title">{`Delete ${objectName} ${type} item?`}</h1>
          ) : null}
        </div>
        <article className="modal__content">
          {`Please confirm that you'd like to delete ${objectName} from the list of ${type}s.`}
          <br></br>
          {`This action cannot be undone.`}
        </article>
        <div className="modal__footer">
          <button onClick={onClose} className="modal__cancel">
            Cancel
          </button>
          <button onClick={deleteHandler} className="modal__delete">
            Delete
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Modal;
