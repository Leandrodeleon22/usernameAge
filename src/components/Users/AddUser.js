import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  console.log(nameInputRef);

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = function (e) {
    e.preventDefault();
    const nameInputRefValue = nameInputRef.current.value;
    const ageInputRefValue = ageInputRef.current.value;
    if (
      nameInputRefValue.trim().length === 0 ||
      ageInputRefValue.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+ageInputRefValue < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(nameInputRefValue, ageInputRefValue);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangehandler = function (e) {
  //   setEnteredUserName(e.target.value);
  // };

  // const ageChangehandler = function (e) {
  //   setEnteredAge(e.target.value);
  // };

  const errorHandler = function () {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // value={enteredUserName}
            id="username"
            type="text"
            // onChange={usernameChangehandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangehandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
