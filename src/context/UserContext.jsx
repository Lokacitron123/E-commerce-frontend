import { createContext, useState, useEffect } from "react";

// Creating Context
const UserContext = createContext({});

// Provider Logics
// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [succesfulReg, setSuccesfulReg] = useState(false);
  const [loading, setLoading] = useState(true);

  // Login user logic
  const login = async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log(response.ok);
        const data = await response.json();
        console.log("console logging data:", data);
        setUser(data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Register user logic
  const registerUser = async (username, password, email) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        setSuccesfulReg(true);
      } else {
        setSuccesfulReg(false);
      }
    } catch (error) {
      console.error("Registration failed . Is in catch", error);
      throw error;
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
    registerUser,
    loading,
    succesfulReg,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
