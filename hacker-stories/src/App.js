import React from 'react';

const arr = [1,2,3,4,5]

function App() {

  return (
    <div>
      <h1>Hello React</h1>
      {arr.map(ele => <h1>{ele}</h1>)}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
