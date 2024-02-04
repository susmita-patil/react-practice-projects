import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list </em>
      </footer>
    );
  }

  const numLength = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numLength) * 100;
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything ! Ready to go.✈️</em>
      ) : (
        <em>
          💼 You have {numLength} items on your list and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
