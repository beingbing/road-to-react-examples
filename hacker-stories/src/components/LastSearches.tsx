import { LastSearchesProp } from "../interfaces/types";

const LastSearches = ({ lastSearches, onLastSearch }: LastSearchesProp) => (
    <>
        {lastSearches.map((searchTerm: string, index: number) => (
            <button
                key={searchTerm + index}
                type="button"
                onClick={() => onLastSearch(searchTerm)}
            >
                {searchTerm}
            </button>
        ))}
    </>
);

export default LastSearches;