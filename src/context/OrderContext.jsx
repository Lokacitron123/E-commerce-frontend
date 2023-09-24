import { createContext, useState } from "react";

const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      // Construct the URL with query parameters

      const response = await fetch("/api/orders", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setOrders(data); // Assuming that the response contains the order data
      console.log("console logging: ", orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const OrderContextValue = {
    orders,
    getOrders,
  };

  return (
    <OrderContext.Provider value={OrderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
