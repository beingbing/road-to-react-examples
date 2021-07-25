import React from "react";
import { List } from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import useSemiPersistentState from "./hooks/useSemiPersistentState";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clarke",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "SET_STORIES":
      return action.payload;
    case "REMOVE_STORY":
      return state.filter((story) => action.payload !== story.objectID);
    default:
      throw new Error();
  }
};

const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  );

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const [stories, dispatchStories] = React.useReducer(storiesReducer, []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then((result) => {
        dispatchStories({ type: "SET_STORIES", payload: result.data.stories });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = (objectID) => {
    dispatchStories({ type: "REMOVE_STORY", payload: objectID });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        onInputChange={handleSearch}
        value={searchTerm}
        isFocused={false}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;
