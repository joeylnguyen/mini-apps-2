import React from 'react';

const Searchbar = ({ handleSubmit, handleChange, query }) => {
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input className="searchField" type="text" value={query} onChange={handleChange}/>
      <input className="searchButton" type="submit" value="Search"/>
    </form>
  )
};

export default Searchbar;
