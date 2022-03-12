import React from "react";
import { useState } from "react";

function Login() {
  document.title = "Login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <input type="submit" name="Submit" className="btn" />
      </form>
    </div>
  );
}

export default Login;
