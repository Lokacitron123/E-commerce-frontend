import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const { cartProducts } = useContext(CartContext);
  console.log("Checking on line 8", cartProducts);
  // const [fakeProducts, setFakeProducts] = useState([
  //   {
  //     product: "price_1NmxozF5QYyCRZGNLc0nAHuj",
  //     quantity: 1,
  //   },
  // ]);
  console.log("Checking cartProducts", cartProducts);
  const handlePayment = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
