import React from 'react';

function SearchBar({ query, filterByQuery }) {
  return (
    <div className="border w-11/12 mx-auto px-4 py-2 my-4 rounded-md flex justify-between items-center">
      <input
        value={query}
        onChange={filterByQuery}
        placeholder="Look for your favourtite beers here"
        className="w-11/12 py-2 px-2"
      />
      <span>
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
}

export default SearchBar;
