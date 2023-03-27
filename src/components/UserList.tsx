import React from "react";
import "./UserList.css";
import Card from "./UI/Card";

// Define the UserProps type, including the users array and the onRemove function
type UserProps = {
  users: {
    name: string;
    age: string;
    id: string;
  }[];
  onRemove: (id: string) => void;
};

// UserList responsible for displaying a list of user items
const UserList = (props: UserProps) => {
  // Render a list of user items, including name and age. When clicking on an item, it will call the onRemove function
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => props.onRemove(user.id)}>
            <span>Name: {user.name}</span>{" "}
            <span>Age: {user.age} years old</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
