import { useContext } from "react";
import "./Productcard.scss";

import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addOneToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addOneToCart(product);
  };

  return (
    <div className="product__card">
      <div className="product__imagecontainer">
        <img className="product__image" src={product.images[0]} alt="" />
        <div className="product__properties">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            {(parseFloat(product.default_price.unit_amount) / 100).toFixed(2)}{" "}
            {product.default_price.currency}
          </p>
        </div>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
