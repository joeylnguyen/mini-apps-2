import React from 'react';

const Searchbar = ({ handleSubmit, handleChange, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Historical Events:
        <input type="text" value={query} onChange={handleChange}/>
      </label>
      <input type="submit" value="Search"/>
    </form>
  )
};

export default Searchbar;
