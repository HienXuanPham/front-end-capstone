import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUserId: null,
  currentUserName: null,
  setCurrentUserId: () => {},
  setCurrentUserName: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const value = {
    currentUserId,
    currentUserName,
    setCurrentUserId,
    setCurrentUserName,
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    if (userId && !currentUserId) {
      setCurrentUserId(userId);
    }
    if (userName && !currentUserName) {
      setCurrentUserName(userName);
    }
  }, [currentUserId, currentUserName]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
