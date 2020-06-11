import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar.jsx';
import EventList from './EventList.jsx';

const App = () => {
  const [ eventData, setEventData ] = useState([]);
  const [ query, setQuery ] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = () => {
    event.preventDefault();
    getEventData(query)
    setQuery('');
  };

  const getEventData = (query) => {
    console.log(query);
    axios.get(`http://localhost:3000/events?q=${query}`)
      .then((results) => setEventData(results.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Searchbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <EventList eventData={eventData} />
    </div>
  )
};

export default App;
