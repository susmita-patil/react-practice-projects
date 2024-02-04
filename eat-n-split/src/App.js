import { FriendsList } from "./FriendsList";
import { FormAddFriend } from "./FormAddFriend";
import "./index.css";
import { Button } from "./Button";
import { FormSplitBill } from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriendForm = () => {
    setShowAddFriendForm((show) => !show);
  };

  const handleAddNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((selectedCur) => {
      return selectedCur?.id === friend.id ? null : friend;
    });
    setShowAddFriendForm(false);
  };

  const handleSplitBill = (value) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    );
    setFriends(updatedFriends);

    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriendForm && (
          <FormAddFriend handleAddNewFriend={handleAddNewFriend} />
        )}

        <Button onClick={handleShowAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      <div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            handleSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}
