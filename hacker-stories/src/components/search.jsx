import React from 'react';

const Search = () => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = event => setSearchTerm(event.target.value);

    return (
        <React.Fragment>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange} />
            <p>Searching for <strong>{searchTerm}</strong></p>
        </React.Fragment>
    );
}

export default Search;