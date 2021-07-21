import React from 'react';

export const List = ({list}) => list.map(ele =>  (
  <div key={ele.objectID}>
    <span><a href={ele.url}>{ele.title}</a></span>&nbsp;
    <span>{ele.author}</span>&nbsp;
    <span>{ele.num_comments}</span>&nbsp;
    <span>{ele.points}</span>&nbsp;
  </div>
));