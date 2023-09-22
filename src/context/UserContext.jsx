import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [succesfulReg, setSuccesfulReg] = useState(false);

  // Refreshing token
  const refreshToken = async () => {
    try {
      const response = await fetch("/api/refresh", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setAuth((prev) => {
          return { ...prev, accessToken: data.accessToken };
        });
      } else {
        console.error("Failed to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  // Check if user is already logged in

  useEffect(() => {
    // Function to check if the accessToken cookie exists
    const checkIsUserLoggedIn = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200) {
          const data = await response.json();
          console.log(data.decoded.username);
          setAuth(data.decoded.username);
          setIsLoggedIn(true);
        } else if (response.status === 403) {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    // Check for the accessToken cookie when the component initializes

    checkIsUserLoggedIn();
    console.log("Checking if user is logged in: ", isLoggedIn);
  }, [isLoggedIn]);

  const login = async (username, password) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(response);

    if (!response.ok) {
      let errorMessage = "";

      if (response.status === 400) {
        errorMessage = "Missing Username or Password";
      } else if (response.status === 401) {
        errorMessage = "Wrong Username or Password";
      } else {
        errorMessage = "Login Failed";
      }

      setErrMsg(errorMessage);

      return;
    }

    const data = await response.json();
    console.log("console logging data response: ", data);
    setAuth(data.username);
    setIsLoggedIn(true);
  };

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

  const logout = () => {
    setAuth(null);
  };

  const UserContextValue = {
    auth,
    setAuth,
    isLoggedIn,
    errMsg,
    setErrMsg,
    login,
    logout,
    registerUser,
    succesfulReg,
    refreshToken,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
