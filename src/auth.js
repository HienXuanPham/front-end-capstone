import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

/* --------- API CALLS --------- */

/** ----- STATE ----- */
//const [usersState, setUserState] = useState([]);
//const [currentUser, setCurrentUser] = useState(undefined);

// const setCurrentUserState = (userId) => {
//   setCurrentUser(userId);
// };

/** ----- SIGN UP ----- */

/** LOG OUT */
const logOut = () => {
  return JSON.parse(localStorage.removeItem("userLoggedIn"));
};

/** Get current user */
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userLoggedIn"));
};

/** export authentication provider */
// const AuthProvider = {
//   signUp,
//   logIn,
//   logOut,
//   getCurrentUser,
// };

//export default AuthProvider;
