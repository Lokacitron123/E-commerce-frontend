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

// Import Layout
import RootLayout from "./layout/RootLayout";

// Import Pages
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productpage/Productpage";
import Loginpage from "./pages/loginregisterpage/LoginRegisterPage";
import Registeruser from "./components/register/Registeruser";
import PaymentConfirmationPage from "./pages/paymentconfirmationpage/PaymentConfirmationPage";
import CartPage from "./pages/cartpage/CartPage";
import PaymentSuccesfulPage from "./pages/paymentsuccessfulpage/PaymentSuccesfulPage";

// Import Components

// Create Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="login" element={<Loginpage />} />
      <Route path="confirmation" element={<PaymentConfirmationPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="register" element={<Registeruser />} />
      <Route path="confirmation" element={<PaymentSuccesfulPage />} />
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
              <RouterProvider router={router} />
            </ShoppingProvider>
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
