import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventData, searched }) => {
  const events = eventData.length ? eventData.map((event) => <Event data={event}/>) : 'Sorry, no results found!';

  return (
    <div>
      {searched ? events : null}
    </div>
  )
};

export default EventList;
