import React, { useState } from 'react';
import Modal from './Modal.jsx';

const Event = ({ data, setEventData, previousSearch, pageNumber }) => {
  const [ showModal, setShowModal ] = useState(false);
  const { date, description, category1, category2 } = data;

  const handleEditClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <ul className="event">
        <li>Date: {date}</li>
        <li>Event: {description}</li>
      </ul>
      <button onClick={handleEditClick}>Edit</button>
      {showModal ?
        <Modal
          setShowModal={setShowModal}
          date={date}
          description={description}
          pageNumber={pageNumber}
          previousSearch={previousSearch}
          setEventData={setEventData}
        />
        : null}
    </div>
  )
};

export default Event;
