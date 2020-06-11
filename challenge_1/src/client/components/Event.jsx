import React from 'react';

const Event = ({ data }) => {
  const { date, description, category1, category2 } = data;
  return (
    <ul className="event">
      <li>Date: {date}</li>
      <li>Event: {description}</li>
    </ul>
  )
};

export default Event;
