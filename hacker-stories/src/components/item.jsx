import styles from "../App.module.css";

const Item = ({
  title,
  url,
  objectID,
  author,
  num_comments,
  points,
  onRemoveItem,
}) => (
  <div key={objectID} className={styles.item}>
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
        className={`${styles.button} ${styles.buttonSmall}`}
      >
        Dismiss
      </button>
    </span>
  </div>
);

export default Item;
