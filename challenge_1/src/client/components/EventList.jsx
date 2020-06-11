import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventData, searched, setShowModal, previousSearch, setEventData, pageNumber }) => {
  const events = eventData.length
    ? eventData.map((event) =>
      <Event data={event} previousSearch={previousSearch} setEventData={setEventData} pageNumber={pageNumber} />
    ) : 'Sorry, no results found!';

  return (
    <div className="eventList">
      {searched ? events : null}
    </div>
  )
};

export default EventList;
