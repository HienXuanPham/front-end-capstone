import React from "react";
import { useState, useEffect, useContext } from "react";
import httpClient from "../httpClient";
import Quote from "./Quote";
import NoteList from "./NoteList";
import { UserContext } from "../UserContext";

const UserAccount = () => {
  const [currentUser, setCurrentUser] = useState();
  const { setCurrentUserId } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await httpClient.get("http://localhost:5000/@me");
        setCurrentUser(response.data);
        localStorage.setItem("userId", response.data.user_id);
        setCurrentUserId(response.data.user_id);
      } catch (error) {
        console.log("Not Authenticated.");
      }
    })();
  }, []);

  return (
    <div>
      {currentUser && <h1>Hi {currentUser.name}</h1>}
      {currentUser && <Quote />}
      {currentUser && <NoteList />}
    </div>
  );
};

export default UserAccount;
