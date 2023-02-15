import React, { useState } from "react";

const NewLogInForm = ({ logIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={formSubmit}>
      <section>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword} />
      </section>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default NewLogInForm;
