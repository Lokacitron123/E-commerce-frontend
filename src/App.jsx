import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./app.scss";

// Import Contexts
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { ShoppingProvider } from "./context/ShoppingContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

// Import Layout
import RootLayout from "./layout/RootLayout";

// Import Pages
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productpage/Productpage";
import Loginpage from "./pages/loginregisterpage/LoginRegisterPage";
import Registeruser from "./components/register/Registeruser";
import PaymentConfirmationPage from "./pages/paymentconfirmationpage/PaymentConfirmationPage";
import CartPage from "./pages/cartpage/CartPage";
import Orderpage from "./pages/orderpage/Orderpage";

// Create Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="login" element={<Loginpage />} />

      <Route path="cart" element={<CartPage />} />
      <Route path="register" element={<Registeruser />} />
      <Route path="orders" element={<Orderpage />} />
      <Route path="confirmation" element={<PaymentConfirmationPage />}>
        <Route path="successful" element />
        <Route path="successful" element />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <ShoppingProvider>
              <OrderProvider>
                <RouterProvider router={router} />
              </OrderProvider>
            </ShoppingProvider>
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
