import InputWithLabel from "./InputWithLabel";

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="button" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);

export default SearchForm;
