import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <div className="container">
      <h3>Sign Up</h3>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name and Last Name"
            value={userName}
            onChange={handleUserName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </Form.Group>
        <Form.Group>
          <Button as="sub" variant="primary" onClick={formSubmit}>
            Sign Up
          </Button>
        </Form.Group>
        <Form.Group>
          <small>
            Already have an account? <Link to="/login">Log In</Link>
          </small>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewSignUpForm;
