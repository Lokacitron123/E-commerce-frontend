import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingContext } from "../../context/ShoppingContext";

const CartPage = () => {
  const { cartProducts, getTotalCost } = useContext(CartContext);
  console.log("checking cartproducts in CartPage", cartProducts);
  const { handlePayment } = useContext(ShoppingContext);

  const handleClick = () => {
    handlePayment();
  };

  return (
    <div>
      {cartProducts.length > 0 ? (
        <>
          <h2>Your Cart</h2>
          <ul>
            {cartProducts.map((product) => (
              <li key={product.id.id}>
                <img
                  className="product__image"
                  src={product.id.images[0]}
                  alt=""
                />
                {product.id.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
          <p>Total Cost: {getTotalCost()}</p>
          <button
            className="btn__animated btn__animated-two"
            onClick={() => handleClick()}
          >
            Payment
          </button>
        </>
      ) : (
        // Render a message if cartItems is empty
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
