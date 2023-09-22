import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { UserContext } from "./UserContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { cartProducts } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [order, setOrder] = useState([]);

  const handleOrder = async () => {};

  const OrderContextValue = {
    order,
    handleOrder,
  };

  return (
    <OrderContext.Provider value={OrderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
