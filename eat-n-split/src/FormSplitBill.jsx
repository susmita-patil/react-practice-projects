import React, { useState } from "react";
import { Button } from "./Button";

export const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const { name, image, balance } = selectedFriend;
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handlePaidByUser = (e) => {
    setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" value={paidByUser} onChange={handlePaidByUser} />

      <label>👭 {name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤪 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
