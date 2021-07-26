import { ListProps } from "../interfaces/types";
import Item from "./item";

const List = ({ list, onRemoveItem }: ListProps) => (
  <>
    {list.map(item => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </>
);

export default List;