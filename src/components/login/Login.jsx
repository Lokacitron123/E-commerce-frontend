import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.scss";

const Login = () => {
  const { login, auth, errMsg } = useContext(UserContext);

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    if (auth.accessToken) {
      setSuccess(true);
      console.log(auth);
      setUsername("");
      setPassword("");
    } else {
      setSuccess(false);
      console.log(errMsg);
      setUsername("");
      setPassword("");
    }
  }, [auth, errMsg]);

  // Persistant login https://www.youtube.com/watch?v=27KeYk-5vJw

  return (
    <>
      {" "}
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <Link to="/">To Home</Link>
          </p>
        </section>
      ) : (
        <section className="login__container">
          <p
            ref={errRef}
            className={errMsg ? "errormessage" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form className="login-form">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="password">Username: </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
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
        </section>
      )}
    </>
  );
};

export default Login;
