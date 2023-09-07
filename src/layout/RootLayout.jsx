import "./RootLayout.scss";
import { NavLink, Outlet, Link } from "react-router-dom";

// components

const RootLayout = () => {
  return (
    <div className="layout__wrapper">
      <header>
        <h1>
          Najk<span>store</span>
        </h1>
        <nav>
          <NavLink className="hover-animation" to="/">
            Home
          </NavLink>
          <NavLink className="hover-animation" to="products">
            Products
          </NavLink>
        </nav>
        <button className="btn__animated btn__animated-one">
          <Link to="login">Login</Link>
        </button>
      </header>
      <main className="outlet__wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
