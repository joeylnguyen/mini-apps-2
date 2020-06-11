import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventData }) => {
  const events = eventData.map((event) => <Event data={event}/>)

  return(
    <div>
      {events}
    </div>
  )
};

export default EventList;
