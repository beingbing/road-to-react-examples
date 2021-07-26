import { ReactComponent as Check } from "../check.svg";
import { ItemProps } from "../interfaces/types";

const Item = ({ item, onRemoveItem }: ItemProps) => (
  <div key={item.objectID} className="item">
    <span style={{ width: "40%" }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: "30%" }}>{item.author}</span>
    <span style={{ width: "10%" }}>{item.num_comments}</span>
    <span style={{ width: "10%" }}>{item.points}</span>
    <span style={{ width: "10%" }}>
      <button
        type="button"
        onClick={() => onRemoveItem(item.objectID)}
        className="button button_small"
      >
        <Check height="18px" width="18px" />
      </button>
    </span>
  </div>
);

export default Item;
