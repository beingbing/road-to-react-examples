const Item = ({title, url, objectID, author, num_comments, points}) => (
    <div key={objectID}>
        <span><a href={url}>{title}</a></span>&nbsp;
        <span>{author}</span>&nbsp;
        <span>{num_comments}</span>&nbsp;
        <span>{points}</span>&nbsp;
    </div>
);

export default Item;