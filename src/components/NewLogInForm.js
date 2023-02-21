import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <div className="container">
      <h3>Login</h3>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group>
          <Button as="sub" variant="primary" onClick={formSubmit}>
            Log In
          </Button>
        </Form.Group>
        <Form.Group>
          <small>
            Do you have an account? <Link to="/signup">Sign Up</Link>
          </small>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewLogInForm;
