import React, { useState } from "react";
import "../index.css";

export default function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  const { description, quantity, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
};
