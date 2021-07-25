import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const StyledColumn = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    color: inherit;
  }
  width: ${(props) => props.width};
`;

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

const StyledButtonSmall = styled(StyledButton)`
  padding: 5px;
`;

const Item = ({
  title,
  url,
  objectID,
  author,
  num_comments,
  points,
  onRemoveItem,
}) => (
  <StyledItem key={objectID}>
    <StyledColumn width="40%">
      <a href={url}>{title}</a>
    </StyledColumn>
    <StyledColumn width="30%">{author}</StyledColumn>
    <StyledColumn width="10%">{num_comments}</StyledColumn>
    <StyledColumn width="10%">{points}</StyledColumn>
    <StyledColumn width="10%">
      <StyledButtonSmall type="button" onClick={() => onRemoveItem(objectID)}>
        Dismiss
      </StyledButtonSmall>
    </StyledColumn>
  </StyledItem>
);

export default Item;
