import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const TokenRefresher = () => {
  const { refreshToken } = useContext(UserContext);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshToken();
    }, 15 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [refreshToken]);

  return null;
};

export default TokenRefresher;
