import React, { useState } from "react";
import AddUsers from "./components/AddUsers";
import UserList from "./components/UserList";

// Define the user type
type user = { name: string; age: string; id: string };

const App = () => {
  // State to store the list of users
  const [users, setUsers] = useState<user[]>([]);

  // Function to add a new user to the list
  const handleAddUsers = ({ name, age, id }: user) => {
    setUsers((prevState) => [...prevState, { name, age, id }]);
  };

  // Function to remove a user by id
  const handleRemoveUser = (id: string) => {
    setUsers((prevState) => prevState.filter((item) => id !== item.id));
  };

  return (
    <>
      {/* Add user form */}
      <AddUsers onAddUser={handleAddUsers} />
      {/* Conditional rendering of the UserList component */}
      {users.length > 0 && (
        <UserList users={users} onRemove={handleRemoveUser} />
      )}
    </>
  );
};

export default App;
