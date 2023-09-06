import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    const { username, password } = formData;
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Login button clicked");
    if (username && password) {
      // Call the login function from the context
      login(username, password);
    } else {
      // Handle validation or show an error message
      console.error("Please provide a username and password.");
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Username: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
