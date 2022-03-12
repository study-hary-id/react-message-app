import React, { useState, useEffect } from "react";

function Login() {
  document.title = "Login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);


  const handleUsernameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
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
