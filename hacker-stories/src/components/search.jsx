import React from 'react';

const Search = () => {

    const handleChange = event => console.log(event.target.value);

    return (
        <React.Fragment>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange} />
        </React.Fragment>
    );
}

export default Search;