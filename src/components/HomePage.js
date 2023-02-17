import React from "react";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../auth.js";

// const LogInHome = () => {
//   return (
//     <div>
//       <h2>Log In Home Page</h2>
//     </div>
//   );
// };

// const LogOutHome = () => {
//   return (
//     <div>
//       <h2>Welcome</h2>
//       <Link to="/signup" />
//     </div>
//   );
// };

const HomePage = () => {
  // const [logged] = useAuth();
  // console.log(logged);

  return (
    // <div>{logged ? LogInHome : LogOutHome}</div>

    <div className="home-page">
      <h2>Home Page</h2>
    </div>
  );
};

export default HomePage;
