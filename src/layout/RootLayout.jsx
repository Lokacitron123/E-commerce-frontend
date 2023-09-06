import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="layout__wrapper">
      <header>
        <h1>
          Najk<span>store</span>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="products">Products</NavLink>
          </nav>
          <button>Sign in</button>
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
