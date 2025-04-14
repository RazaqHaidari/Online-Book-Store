import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary ms-2" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
