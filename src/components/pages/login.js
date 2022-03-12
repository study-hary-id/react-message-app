import React, { useState, useEffect } from "react";

function Login() {
  document.title = "Login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateLogin();
  }, [username, password]);

  const handleUsernameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const validateLogin = () => {
    if (password.length >= 8 && username.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>
          <input type="text" placeholder="Username" onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="Password" onChange={handlePasswordChange} />
        </label>
        <input
          type="submit"
          name="Submit"
          className="btn"
          style={isValid ? {} : { display: "none" }}
        />
      </form>
    </div>
  );
}

export default Login;
