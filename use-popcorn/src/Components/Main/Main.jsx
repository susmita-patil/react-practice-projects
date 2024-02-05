import React from "react";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};
