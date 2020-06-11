import React, { useState } from 'react';
import { editEventData, getEventData } from '../axios/axios.js';

const Modal = ({ setShowModal, date, description, setEventData, previousSearch, pageNumber }) => {
  const [ newDate, setNewDate ] = useState(date);
  const [ newDescription, setNewDescription ] = useState(description);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = { "date": newDate, "description": newDescription }
    console.log(config);
    editEventData(description, config)
      .then((result) => {
        console.log(result);
        getEventData(previousSearch, pageNumber)
          .then((results) => setEventData(results.data))
          .catch((error) => console.log(error));
        setShowModal(false);
      })
      .catch((error) => console.log(error));
  }

  const handleEdits = (event) => {
    switch(event.target.id) {
      case 'date':
        setNewDate(event.target.value);
        break;
      case 'description':
        setNewDescription(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="editModal">
      <div className="editModalMain">
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input id="date" type="text" value={newDate} onChange={handleEdits} />
          </label>
          <label>
            Description:
            <textarea id="description" type="text" value={newDescription} onChange={handleEdits} />
          </label>
          <input type="submit" />
        </form>
       <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  )
};

export default Modal;
