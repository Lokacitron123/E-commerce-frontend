import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./app.scss";

// Import Contexts
import { ProductProvider } from "./context/productContext";

// Import Layout
import RootLayout from "./layout/RootLayout";

// Import Pages
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productpage/Productpage";

// Create Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<ProductPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App;