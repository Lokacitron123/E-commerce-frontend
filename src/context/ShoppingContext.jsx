import { createContext, useContext } from "react";
import { CartContext } from "./CartContext";
import { UserContext } from "./UserContext";

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const { cartProducts } = useContext(CartContext);
  const { user } = useContext(UserContext);
  console.log("Checking on line 8", cartProducts);

  console.log("Checking cartProducts", cartProducts);
  const handlePayment = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include the access token in the Authorization header
        Authorization: `Bearer ${user.accessToken}`,
      },

      body: JSON.stringify(cartProducts),
    });

    if (!response.ok) {
      return;
    }

    const { url } = await response.json();
    window.location = url;
  };

  const ShoppingContextValue = {
    handlePayment,
  };

  return (
    <ShoppingContext.Provider value={ShoppingContextValue}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
