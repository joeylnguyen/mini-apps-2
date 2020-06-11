import React from 'react';

const Event = ({ data }) => {
  const { date, description, category1, category2 } = data;
  return (
    <ul className="event">
      <li>Date: {date}</li>
      <li>Event: {description}</li>
      <li>Location: {category2}</li>
    </ul>
  )
};

export default Event;


// {
//   "date": "-300",
//   "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.",
//   "lang": "en",
//   "category1": "By place",
//   "category2": "Greece",
//   "granularity": "year"
// }
