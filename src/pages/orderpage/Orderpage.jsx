import "./Orderpage.scss";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderContext";

//Components
import Ordercard from "../../components/ordercard/Ordercard";

const Productpage = () => {
  const { orders, getOrders } = useContext(OrderContext);

  useEffect(() => {
    getOrders();
    console.log(orders);
  }, []);

  return (
    <div className="order__wrapper">
      <div className="order__grid">
        {orders && orders.length > 0 ? (
          orders.map((order, index) => <Ordercard key={index} order={order} />)
        ) : (
          <p>No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default Productpage;
