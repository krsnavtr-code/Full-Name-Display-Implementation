import React from "react";
import { useState } from "react";
import styles from "./NameImplementation.module.css";

const NameImplementation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handleCreateFullName = () => {
    const fullNameValue = `${firstName} ${lastName}`;
    setFullName(fullNameValue);
  };

  const isSubmitDisabled = !firstName || !lastName;

  return (
    <div className={styles.container}>
      <h1> Full Name Display </h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleCreateFullName} disabled={isSubmitDisabled}>
        Submit
      </button>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default NameImplementation;
