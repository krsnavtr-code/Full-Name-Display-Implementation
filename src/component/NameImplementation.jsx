import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("Please enter both first name and last name.");
      return;
    }
    const fullNameValue = `${firstName} ${lastName}`;
    setFullName(fullNameValue);
  };

  return (
    <div className={styles.container}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default NameImplementation;
