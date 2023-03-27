// AddUsers component is responsible for adding new users and validating user input on the form.
// It holds a form to input a user's name and age, sends new user details back to the parent component through props,
// and displays a modal for validation error messages.

import React, { useRef, useState } from "react";
import "./AddUsers.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

type AddUsersProps = {
  onAddUser: (user: { name: string; age: string; id: string }) => void;
};

const AddUsers = (props: AddUsersProps) => {
  const [error, setError] = useState<{ title: string; message: string } | null>(
    null
  );
  const userNameRef = useRef<HTMLInputElement>(null);
  const userAgeRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Handles form submission, validates inputs, and notifies parent component
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = userNameRef.current!.value;
    const enteredAge = userAgeRef.current!.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty input)",
      });
      return;
    }
    if (Number(enteredAge) < 1) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid age (greater than 0)",
      });
      return;
    }

    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: new Date().getTime().toString(),
    };
    props.onAddUser(newUser);
    formRef.current?.reset();
  };

  // Closes modal by resetting error state
  const handleModalClose = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onClose={handleModalClose}
        />
      )}
      <Card className="input">
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="userName">Add new user</label>
          <input type="text" id="userName" ref={userNameRef} />
          <label htmlFor="userAge">Enter age</label>
          <input type="number" id="userAge" ref={userAgeRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
