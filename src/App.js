import "./App.css";
import { useState, useEffect } from "react";
import NewSignUpForm from "./components/NewSignUpForm";
import NewLogInForm from "./components/NewLogInForm";
import UserAccount from "./components/UserAccount";
import axios from "axios";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  const signUp = (userName, email, password, confirmPassword) => {
    userSignUp(userName, email, password, confirmPassword)
      .then((newUser) => {
        setUserState((usersState) => [...usersState, newUser]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const users = usersState.map((userAccount) => {
    return (
      <UserAccount
        userAccount={userAccount}
        //createNote={createNote}
        //selectNote={selectNote}
      />
    );
  });
  let userLoggedIn = "";

  const logIn = (email, password) => {
    userLogIn(email, password)
      .then((userAccount) => {
        userLoggedIn = userAccount;

        console.log("Logged in successfully.");
        console.log(userLoggedIn);
        console.log(userLoggedIn.user_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${kBaseUrl}/users/${userLoggedIn.user_id}`)
      .then((response) => {});
  }, []);

  return (
    <section className="App">
      <header className="App-header"></header>
      <NavBar />
      <main>
        <nav>
          <section>
            Sign Up
            <NewSignUpForm signUp={signUp} />
          </section>
          <section>
            Log In
            <NewLogInForm logIn={logIn} />
          </section>
        </nav>
      </main>
    </section>
  );
}

export default App;
