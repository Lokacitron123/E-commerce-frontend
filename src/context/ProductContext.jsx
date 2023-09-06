import { createContext, useState, useEffect } from "react";

// Creating Context
const ProductContext = createContext();

// Provider Logics
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  // Fetch products logic
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (response.ok) {
          const productsData = await response.json();
          console.log(productsData.products.data);
          setProducts(productsData.products.data);
        } else {
          console.log("Error fetching products");
        }
      } catch (error) {
        console.error("Fetching products failed", error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

  const ProductContextValue = {
    products,
  };

  return (
    <ProductContext.Provider value={ProductContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };