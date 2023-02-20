import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUserId: null,
  setCurrentUserId: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const value = { currentUserId, setCurrentUserId };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && !currentUserId) {
      setCurrentUserId(userId);
    }
  }, [currentUserId]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
