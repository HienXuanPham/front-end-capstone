import React from "react";
import { useState, useEffect } from "react";
import httpClient from "../httpClient";
import Quote from "./Quote";
import NoteList from "./NoteList";

const UserAccount = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await httpClient.get("http://localhost:5000/@me");
        setCurrentUser(response.data);
        localStorage.setItem("status", "loggedIn");
        console.log(localStorage.getItem("status"));
      } catch (error) {
        console.log("Not Authenticated.");
      }
    })();
  }, []);

  let userId = "";
  if (currentUser) {
    console.log(`Current User: ${currentUser.user_id}`);
    userId = currentUser.user_id;
  }

  return (
    <div>
      {currentUser && <h1>Hi {currentUser.name}</h1>}
      {currentUser && <Quote />}
      {currentUser && <NoteList userId={userId} />}
    </div>
  );
};

export default UserAccount;
