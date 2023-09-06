import { createContext, useState, useEffect } from "react";

// Creating Context
const UserContext = createContext({});

// Provider Logics
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login user logic
  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log(response.ok);
        const data = await response.json();
        console.log(data.token);
        setUser(data.token);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Logout user logic
  const logout = () => {
    setUser(null);
  };

  // Check if user is already logged in
  useEffect(() => {
    setLoading(false);
  }, []);

  // Providing values and returning the Provider

  const UserContextValue = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
