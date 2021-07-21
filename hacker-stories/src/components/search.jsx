import React from 'react';

export default function Search() {
    return (
        <React.Fragment>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </React.Fragment>
    );
}