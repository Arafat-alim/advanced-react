import React, { useState } from "react";

function InputForm() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactData, setContactData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactData((prevContact) => [...prevContact, inputData]);
  };

  const contact = contactData.map((contact, index) => (
    <h1 key={index}>
      {contact.firstName} {contact.lastName}
    </h1>
  ));
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
          placeholder="Enter First name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
          placeholder="Enter Last name"
        />
        <br />
        <button>Add Contact</button>
      </form>
      {contact}
    </>
  );
}

export default InputForm;
