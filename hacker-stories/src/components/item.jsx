import { ReactComponent as Check } from "../check.svg";

const Item = ({
  title,
  url,
  objectID,
  author,
  num_comments,
  points,
  onRemoveItem,
}) => (
  <div key={objectID} className="item">
    <span style={{ width: "40%" }}>
      <a href={url}>{title}</a>
    </span>
    <span style={{ width: "30%" }}>{author}</span>
    <span style={{ width: "10%" }}>{num_comments}</span>
    <span style={{ width: "10%" }}>{points}</span>
    <span style={{ width: "10%" }}>
      <button
        type="button"
        onClick={() => onRemoveItem(objectID)}
        className="button button_small"
      >
        <Check height="18px" width="18px" />
      </button>
    </span>
  </div>
);

export default Item;
