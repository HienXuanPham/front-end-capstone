import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  let navigate = useNavigate();
  const redirectToLogIn = () => {
    navigate("/login");
  };

  const redirectToSignUp = () => {
    navigate("/signup");
  };

  return (
    <section id="home-page">
      <div className="home-page-container">
        <h3 className="h3-home-page">Start your journal here</h3>
        <Button variant="btn btn-warning" onClick={redirectToLogIn}>
          Login
        </Button>
        <Button variant="btn btn-warning" onClick={redirectToSignUp}>
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
