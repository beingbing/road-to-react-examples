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

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "STORIES_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter((story) => story.objectID !== action.payload),
      };
    default:
      throw new Error();
  }
};

// const getAsyncStories = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
//   );

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  React.useEffect(() => {
    dispatchStories({ type: "STORIES_FETCH_INIT" });
    fetch(`${API_ENDPOINT}react`)
      .then((response) => response.json())
      .then((result) => {
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: result.hits,
        });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, []);

  const handleRemoveStory = (objectID) => {
    dispatchStories({ type: "REMOVE_STORY", payload: objectID });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.data.filter((story) =>
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
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;
