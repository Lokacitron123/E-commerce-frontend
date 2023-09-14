import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    console.log("Login button clicked");
    if (username && password) {
      // Call the login function from the context
      login(username, password);
    } else {
      // Handle validation or show an error message
      console.error("Please provide a username and password.");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login__container">
      <form className="login-form">
        <h1>Login</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Username: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn__animated btn__animated-one"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="register">
          <h2>No account?</h2>
          <button className="btn__animated btn__animated-one" type="button">
            <Link to="/register">Register account</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
