import { ListProps, Stories, Story } from "../interfaces/types";
import Item from "./Item";
import React from "react";
import { sortBy } from "lodash";

type Sorts = {
    [NONE: string]: (list: Stories) => Stories;
    TITLE: (list: Stories) => Stories;
    AUTHOR: (list: Stories) => Stories;
    COMMENT: (list: Stories) => Stories;
    POINT: (list: Stories) => Stories;
};

const SORTS: Sorts = {
    NONE: (list) => list,
    TITLE: (list) => sortBy(list, "title"),
    AUTHOR: (list) => sortBy(list, "author"),
    COMMENT: (list) => sortBy(list, "num_comments").reverse(),
    POINT: (list) => sortBy(list, "points").reverse(),
};

const List = ({ list, onRemoveItem }: ListProps) => {
    const [sort, setSort] = React.useState({
        sortKey: 'NONE',
        isReverse: false,
    });

    const handleSort = (sortKey: string) => {
        const isReverse = sort.sortKey === sortKey && !sort.isReverse;
        setSort({ sortKey, isReverse });
    };

    const sortFunction = SORTS[sort.sortKey];
    const sortedList = sort.isReverse
        ? sortFunction(list).reverse()
        : sortFunction(list);

    return (
        <div>
            <div style={{ display: "flex" }}>
                <span style={{ width: "40%" }}>
                    <button
                        type="button"
                        onClick={() => handleSort("TITLE")}
                        className={`banner ${sort.sortKey === "TITLE" ? "activeBg" : ""}`}
                    >
                        Title
                    </button>
                </span>
                <span style={{ width: "30%" }}>
                    <button type="button" onClick={() => handleSort("AUTHOR")}
                        className={`banner ${sort.sortKey === "AUTHOR" ? "activeBg" : ""}`}>
                        Author
                    </button>
                </span>
                <span style={{ width: "10%" }}>
                    <button type="button" onClick={() => handleSort("COMMENT")}
                        className={`banner ${sort.sortKey === "COMMENT" ? "activeBg" : ""}`}>
                        Comments
                    </button>
                </span>
                <span style={{ width: "10%" }}>
                    <button type="button" onClick={() => handleSort("POINT")}
                        className={`banner ${sort.sortKey === "POINT" ? "activeBg" : ""}`}>
                        Points
                    </button>
                </span>
                <span style={{ width: "10%" }}>Actions</span>
            </div>

            {sortedList.map((item: Story) => (
                <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
            ))}
        </div>
    );
};

export default List;
