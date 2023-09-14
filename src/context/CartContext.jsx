import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // data to work with [{ id: 1, quantity: 2}]
  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity; // Only grabbing quantity if we get an id

    if (!quantity) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // Product is not in cart
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { id: id, quantity: 1 },
      ]);
      console.log(cartProducts);
    } else {
      // Product is in cart
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
      console.log("In else checker, cartProducts:", cartProducts);
    }

    // Log the product ID and updated cartProducts

    console.log("Updated cartProducts:", cartProducts);
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(1);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((toBeDeletedProduct) => {
        return toBeDeletedProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;

    // cartProducts.map((product) => {
    //   const data = cartProducts;
    //   console.log("checking first item", data[0].id.default_price.unit_amount);

    //   totalCost += data[0].id.default_price.unit_amount * data[0].id.quantity;
    // });

    cartProducts.forEach((product) => {
      const unitAmount = product.id.default_price.unit_amount;
      const quantity = product.quantity;
      const productCost = unitAmount * quantity;

      totalCost += productCost;
    });

    totalCost /= 100;
    return totalCost;
  }

  const CartContextValue = {
    // items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    cartProducts,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

// https://www.youtube.com/watch?v=_8M-YVY76O8&t=384s CartLogic section
