import React from 'react';
import {List} from './components/list';
import Search from './components/search';

const App = () => {

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
