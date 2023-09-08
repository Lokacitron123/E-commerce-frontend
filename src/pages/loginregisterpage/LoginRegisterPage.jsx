import "./LoginRegisterPage.scss";

// Components
import Login from "../../components/login/Login";
import Registeruser from "../../components/register/Registeruser";
import { Outlet } from "react-router-dom";

const Loginpage = () => {
  return (
    <section className="loginpage__layout">
      <Login />
    </section>
  );
};

export default Loginpage;
