import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

const USER_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setvalidMatch] = useState(false);

  const [checkBox, setCheckbox] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setvalidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleCheckBox = () => {
    setCheckbox(!checkBox);
    console.log(checkBox);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //prevent JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    console.log(user, pwd);
    setSuccess(true);
    console.log(success);
  };

  return (
    <div className="signup pineapples">
      <div className="signup-container">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="section-title signup-title">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-fields">
            <input
              autoComplete="off"
              ref={userRef}
              type="text"
              placeholder="First Name"
            ></input>
            <input
              autoComplete="off"
              ref={userRef}
              type="text"
              placeholder="Last Name"
            ></input>
            <span className={validName ? "valid signup-sign" : "hide"}>
              <i className="fa-solid fa-check"></i>
            </span>
            <span
              className={validName || !user ? "hide" : "invalid signup-sign"}
            >
              <i className="fa-solid fa-x"></i>
            </span>
            <input
              type="email"
              id="username"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              placeholder="Email Address"
            />
            <span className={validPwd ? "valid signup-sign" : "hide"}>
              <i className="fa-solid fa-check"></i>
            </span>
            <span className={validPwd || !pwd ? "hide" : "invalid signup-sign"}>
              <i className="fa-solid fa-x"></i>
            </span>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              placeholder="Password"
            />
            <i className="bx bx-info-circle signup-tooltip-icon"></i>{" "}
            <p className="signup-tooltip-text">
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
            </p>
            <span
              className={validMatch && matchPwd ? "valid signup-sign" : "hide"}
            >
              <i className="fa-solid fa-check"></i>
            </span>
            <span
              className={
                validMatch || !matchPwd ? "hide" : "invalid signup-sign"
              }
            >
              <i className="fa-solid fa-x"></i>
            </span>
            <input
              type="password"
              id="confirm_pwd"
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              placeholder="Confirm Password"
            />
          </div>
          <div className="signup-agree">
            <input
              type="checkbox"
              required
              name=""
              id=""
              className="signup-checkbox"
              onChange={handleCheckBox}
            ></input>
            <p>By continuing I agree to terms of use & privacy policy.</p>
          </div>
          <button
            disabled={
              !validName || !validPwd || !validMatch || !checkBox ? true : false
            }
          >
            Sign up
          </button>
        </form>
        <p className="signup-login">
          Already have an account? {"  "}
          <Link to="/login" className="signup-login-btn link">
            {" "}
            <span>Login here</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
