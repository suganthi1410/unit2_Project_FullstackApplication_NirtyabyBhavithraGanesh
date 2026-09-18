import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Load login from localStorage on refresh
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || null,
  );

  // Save login to localStorage whenever it changes
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", loggedInUser);
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [loggedInUser]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
}
