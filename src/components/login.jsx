import React from "react";
import "../App.css";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const Login = (props) => {
  const {
    loginSection,
    registerSection,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  // clearErrors();
  // useEffect(() => {
  //   clearErrors()

  // }, [])

  return (
    <div
      className={"authBox"}
      style={{
        border: "1px solid red",
      }}
    >
      <div className="home-bg2"></div>
      <h1
        style={{
          fontSize: "36px",
          fontFamily: "arial",
          color: "white",
          marginTop: "12%",
          marginBottom: "3%",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome Back
      </h1>
      <div className={"rightBox2"} align-items-center>
        <div className={"box"}>
          {/* <div className={'titleAuth'}> Login  </div> */}
          <div
            className={"emailInputlogin"}
            style={{ fontSize: "14.43px", fontFamily: "arial" }}
          >
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className={"errorMsg"}>{emailError}</p>
          <div
            className={""}
            style={{ fontSize: "14.43px", fontFamily: "arial" }}
          >
            <input
              className={"form-control"}
              type={"password"}
              placeholder={"Password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className={"errorMsg"}>{passwordError}</p>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "16px",
              fontFamily: "arial",
              fontWeight: "bold",
            }}
          >
            Forgot Your Password
          </p>

          <button className={"btnAuth"} onClick={handleLogin}>
            <i
              class="fas fa-lock"
              style={{
                fontSize: "18px",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            ></i>
            Log in
          </button>

          {/* <p>Forgot your password</p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
