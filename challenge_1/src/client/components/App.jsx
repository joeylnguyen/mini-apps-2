import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ eventData, setEventData ] = useState([]);
  const [ query, setQuery ] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = () => {
    event.preventDefault();
    getEventData(query)
  };

  const getEventData = (query) => {
    console.log(query);
    axios.get(`http://localhost:3000/events?q=${query}`)
      .then((results) => console.log(results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Historical Events:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
};

export default App;
