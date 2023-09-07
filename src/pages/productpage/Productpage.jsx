import "./Productpage.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

//Components
import Productcard from "../../components/productcard/Productcard";

const Productpage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product__wrapper">
      <div className="product__grid">
        {/* {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))} */}
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Productcard key={index} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Productpage;
