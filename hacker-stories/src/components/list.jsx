import React from "react";
import Item from "./item";

export const List = React.memo(({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} {...item} onRemoveItem={onRemoveItem} />
  ))
);
