import React from 'react';

const Search = ({onSearch, searchTerm}) => (
    <React.Fragment>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={onSearch} value={searchTerm} />
        <p>Searching for <strong>{searchTerm}</strong></p>
    </React.Fragment>
);

export default Search;