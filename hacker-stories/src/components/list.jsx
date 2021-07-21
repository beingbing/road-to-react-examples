import React from 'react';

const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clarke',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

export const List = () => {
    return list.map(ele => {
      return (
        <div key={ele.objectID}>
          <span><a href={ele.url}>{ele.title}</a></span>&nbsp;
          <span>{ele.author}</span>&nbsp;
          <span>{ele.num_comments}</span>&nbsp;
          <span>{ele.points}</span>&nbsp;
        </div>
      );
    });
  }