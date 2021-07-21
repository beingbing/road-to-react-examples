import React from 'react';

const Search = () => {
    return (
        <React.Fragment>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </React.Fragment>
    );
}

export default Search;