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

// Import Layout
import RootLayout from "./layout/RootLayout";

// Import Pages
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productpage/Productpage";
import Loginpage from "./pages/loginregisterpage/LoginRegisterPage";
import Registeruser from "./components/register/Registeruser";

// Import Components

// Create Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="login" element={<Loginpage />} />
      <Route path="register" element={<Registeruser />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ProductProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
