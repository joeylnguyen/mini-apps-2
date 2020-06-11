import React, { useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Searchbar from './Searchbar.jsx';
import EventList from './EventList.jsx';

const App = () => {
  const [ eventData, setEventData ] = useState([]);
  const [ pageCount, setPageCount ] = useState(0);
  const [ query, setQuery ] = useState('');
  const [ previousSearch, setPreviousSearch] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ searched, setSearched ] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    setPageCount(0);
    setLoading(true);
    getEventData(query)
    setPreviousSearch(query);
    setQuery('');
  };

  const handlePageClick = (data) => {
    const pageNumber = data.selected;

    getEventData(previousSearch, pageNumber)
  };

  const getEventData = (query, page = 1) => {
    axios.get(`http://localhost:3000/events?q=${query}&_page=${page}`)
      .then((results) => {
        const eventCount = results.headers['x-total-count'];

        setPageCount(Math.ceil(eventCount/10));
        setEventData(results.data);
        setLoading(false);
        setSearched(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Historical Events Finder</h1>
      <Searchbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      {loading ? 'Getting results...' : <EventList className="eventList" eventData={eventData} searched={searched} />}
      {pageCount ?
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        : null}
    </div>
  )
};

export default App;
