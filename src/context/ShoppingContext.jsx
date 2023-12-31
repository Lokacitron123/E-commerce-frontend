import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const { cartProducts } = useContext(CartContext);

  const [verifiedPayment, setVerifiedPayment] = useState(false);

  const handlePayment = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(cartProducts),
    });

    if (!response.ok) {
      return;
    }

    const { url, sessionId } = await response.json();
    localStorage.setItem("sessionId", sessionId);
    window.location = url;
  };

  const handleVerifyPayment = async () => {
    const sessionId = localStorage.getItem("sessionId");
    console.log("logging after localstorage: ", sessionId);
    const response = await fetch("/api/confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ sessionId }),
    });

    const { verified } = await response.json();

    setVerifiedPayment(verified);
  };

  const handleOrder = async () => {
    const sessionId = localStorage.getItem("sessionId");

    const response = await fetch("/api/confirmedorders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ sessionId }),
    });

    const { confirmedOrder } = await response.json();

    console.log("Logging confirmed order: ", confirmedOrder);
  };

  const ShoppingContextValue = {
    handlePayment,
    handleOrder,
    verifiedPayment,
    handleVerifyPayment,
  };

  return (
    <ShoppingContext.Provider value={ShoppingContextValue}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
