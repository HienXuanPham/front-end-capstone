import React, { useState } from "react";

const NewSignUpForm = ({ signUp }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    signUp(userName, email, password, confirmPassword);

    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={formSubmit}>
      <section>
        <label>Name</label>
        <input type="text" value={userName} onChange={handleUserName} />
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword} />
        <label>Confirm Password</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </section>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default NewSignUpForm;
