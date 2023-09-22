import "./RootLayout.scss";
import { useContext } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// Import Utils
import TokenRefresher from "../utils/tokenRefresh";

const RootLayout = () => {
  const { isLoggedIn, auth } = useContext(UserContext);
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

        <div>
          <button className="btn__animated btn__animated-one">
            <Link to="cart">
              Cart <span>Items: </span>
            </Link>
          </button>
        </div>
        {!isLoggedIn ? (
          <button className="btn__animated btn__animated-one">
            <Link to="login">Login</Link>
          </button>
        ) : (
          <div>
            <p>{auth}</p>
          </div>
        )}
      </header>
      <main className="outlet__wrapper">
        <TokenRefresher />
        <Outlet />
      </main>
      <footer>
        <div className="footer__container-wrapper">
          <div className="footer__container-contact">
            <ul>
              <p>Socials</p>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
          <div className="footer__container-contact">
            <p>Help</p>
            <ul>
              <li>D</li>
              <li>E</li>
              <li>F</li>
            </ul>
          </div>
          <div className="footer__container-contact">
            <p>Contact</p>
            <ul>
              <li>G</li>
              <li>H</li>
              <li>I</li>
            </ul>
          </div>
        </div>
        <div className="copyright">Copyright 2023</div>
      </footer>
    </div>
  );
};

export default RootLayout;
