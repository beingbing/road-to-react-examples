import React from 'react';

const Search = ({onSearch, searchTerm}) => (
    <React.Fragment>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={onSearch} />
        <p>Searching for <strong>{searchTerm}</strong></p>
    </React.Fragment>
);

export default Search;