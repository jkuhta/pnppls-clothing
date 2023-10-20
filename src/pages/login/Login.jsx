import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

const USER_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //prevent JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      console.log(errMsg);

      return;
    }

    console.log(user, pwd);
    setSuccess(true);
    console.log(success);
  };

  return (
    <div className="login pineapples">
      <div className="login-container">
        <h1 className="section-title login-title">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            <input
              type="email"
              id="username"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              placeholder="Email Address"
            />

            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              placeholder="Password"
            />
          </div>

          <button disabled={!user || !pwd ? true : false}>Log in</button>
        </form>
        <p className="login-footer">
          Don't have an account? {"  "}
          <Link to="/signup" className="login-footer-btn link">
            {" "}
            <span>Sign-up here</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
