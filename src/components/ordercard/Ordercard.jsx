import "./Ordercard.scss";

const Ordercard = ({ order }) => {
  return (
    <div className="order-card">
      <p>Order ID: {order.id}</p>
      <p>Created: {order.created}</p>
      <p>Customer: {order.customer}</p>
      <p>Products:</p>
      <ul>
        {order.products.map((product, index) => (
          <li key={index}>
            <p>Product: {product.product}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ordercard;
