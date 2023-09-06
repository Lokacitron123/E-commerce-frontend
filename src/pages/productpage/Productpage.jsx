import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Productpage = () => {
  const { products } = useContext(ProductContext);
  return <div>{products[0].id}</div>;
};

export default Productpage;
