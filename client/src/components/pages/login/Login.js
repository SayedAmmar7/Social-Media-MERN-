import React from "react";
function Login() {
  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" className="password" id="password" />

          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
export default Login;
