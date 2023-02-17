import "./App.css";
import { useState } from "react";
import NewSignUpForm from "./components/NewSignUpForm";
import NewLogInForm from "./components/NewLogInForm";
import UserAccount from "./components/UserAccount";
import HomePage from "./components/HomePage";
import { login } from "./auth.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

/* --------- API CALLS --------- */
/* /signup path */
const userSignUp = (name, email, password, confirm_password) => {
  const requestBody = {
    name,
    email,
    password,
    confirm_password,
  };
  return axios
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
  return axios
    .post(`${kBaseUrl}/login`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  /** ----- STATE ----- */
  const [usersState, setUserState] = useState([]);
  /** ----- SIGN UP ----- */
  const signUp = (userName, email, password, confirmPassword) => {
    userSignUp(userName, email, password, confirmPassword)
      .then((response) => {
        if (response["message"] === "success") {
          setUserState((usersState) => [...usersState, response["user"]]);
          alert("You successfully created an account.");
        } else {
          alert(response["message"]);
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
          login(userAccount.data.access_token);
          window.location.href = `/users/${userAccount.data.user_id}`;
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
        <section className="App">
          <header className="App-header"></header>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<NewSignUpForm signUp={signUp} />} />
            <Route path="/login" element={<NewLogInForm logIn={logIn} />} />
            <Route path="/users/:userId" element={<UserAccount />} />
          </Routes>
          <main></main>
        </section>
      </Router>
    </>
  );
}

export default App;
