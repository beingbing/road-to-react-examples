import React from 'react';
import Item from './item';

export const List = ({list}) => list.map(({objectID, ...item}) =>  <Item key={objectID} {...item} />);