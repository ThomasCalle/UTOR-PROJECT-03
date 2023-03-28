import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <main className="container mt-5">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="chess-login-form">
        <div className="mb-3">
          <label htmlFor="username-chess-login" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username-chess-login"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password-chess-login" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-chess-login"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </main>
  );
};

export default Login;