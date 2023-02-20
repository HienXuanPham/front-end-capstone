import "./App.css";
import NewSignUpForm from "./components/NewSignUpForm";
import NewLogInForm from "./components/NewLogInForm";
import UserAccount from "./components/UserAccount";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import httpClient from "./httpClient";
import { useState } from "react";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

/* /signup path */
const userSignUp = (name, email, password, confirm_password) => {
  const requestBody = {
    name,
    email,
    password,
    confirm_password,
  };
  return httpClient
    .post(`${kBaseUrl}/signup`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

/* /login path */
const userLogIn = (email, password) => {
  const requestBody = {
    email,
    password,
  };
  return httpClient
    .post(`${kBaseUrl}/login`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = (userName, email, password, confirmPassword) => {
    userSignUp(userName, email, password, confirmPassword)
      .then((response) => {
        if (response.message === "success") {
          alert("You successfully created an account.");
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /** ----- LOG IN ----- */
  const logIn = (email, password) => {
    userLogIn(email, password)
      .then((userAccount) => {
        if (userAccount.message === "success") {
          setCurrentUser(userAccount);
          window.location.href = "/user";
        } else {
          alert(userAccount.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/user" element={<UserAccount />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<NewSignUpForm signUp={signUp} />} />
          <Route path="/login" element={<NewLogInForm logIn={logIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
