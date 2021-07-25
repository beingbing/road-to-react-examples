const Item = ({
  title,
  url,
  objectID,
  author,
  num_comments,
  points,
  onRemoveItem,
}) => (
  <div key={objectID}>
    <span>
      <a href={url}>{title}</a>
    </span>
    &nbsp;
    <span>{author}</span>&nbsp;
    <span>{num_comments}</span>&nbsp;
    <span>{points}</span>&nbsp;
    <span>
      <button type="button" onClick={() => onRemoveItem(objectID)}>
        Dismiss
      </button>
    </span>
  </div>
);

export default Item;
