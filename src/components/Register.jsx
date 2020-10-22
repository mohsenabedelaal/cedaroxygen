import React, { useState } from "react";
import "../App.css";
import "../componentscss/Home2.css";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const Register = (props) => {
  const {
    loginSection,
    registerSection,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    last_name,
    setLastName,
    phone,
    setPhone,
    address,
    setAddress,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    loading,
  } = props;

  const [show, setShow] = useState(true);
  // const [loading,setLoading] = useState(false);

  return (
    <div className="container-fluid bg1">
      <div className="row justify-content-center">
        <div
          className="col justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="justify-content-center text-center">
            {/* <div className="home-bg2"></div> */}

            <h3
              style={{
                // marginTop: "2%",
                marginBottom: "3%",
                fontWeight: "bold",
                fontSize: "36px",
                fontFamily: "arial",

                // marginRight:"1%"
              }}
            >
              Register
            </h3>
            <div
              className="rightBox justify-content-center align-self-center "
              style={{
                width: "400px",
                height: "450px",
                border: "none",
                position: "relative",
                margin: "auto",
              }}
            >
              <div
                className={"box"}
                style={{
                  position: "relative",
                  height: "100%",
                  marginTop: "0%",
                  paddingTop: "10%",
                  marginBottom: "0%",
                }}
              >
                {/* <div className={'titleAuth'}> Join  </div> */}

                <div
                  className="mb-2"
                  style={{ fontSize: "14.43px", fontFamily: "arial" }}
                >
                  <input
                    className={"form-control regInput"}
                    type={"text"}
                    placeholder={"Email"}
                    // autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* <p className={'errorMsg'}>{emailError}</p> */}
                {/* <div className="mb-2" >
            <input
              className={'form-control'}
              type={'password'}
              placeholder={'Password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div> */}
                <div className="input-group mb-2">
                  <input
                    type="password"
                    className="form-control regInput"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    placeholder="Password"
                    id="x1x1"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      {show ? (
                        <i
                          className="fas fa-eye"
                          role="button"
                          onClick={() => {
                            setShow(!show);
                            document.getElementById("x1x1").type = "text";
                          }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-eye-slash"
                          role="button"
                          onClick={() => {
                            setShow(!show);
                            document.getElementById("x1x1").type = "password";
                          }}
                        ></i>
                      )}
                    </span>
                  </div>
                </div>
                {/* <p className={'errorMsg'}>{passwordError}</p> */}
                <div className="mb-2">
                  <input
                    className={"form-control regInput"}
                    type={"text"}
                    placeholder={"First Name"}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className={"form-control regInput"}
                    type={"text"}
                    placeholder={"Last Name"}
                    required
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className={"form-control regInput"}
                    type={"text"}
                    placeholder={"Phone Number"}
                    required
                    value={phone}
                    maxlength="8"
                    id="pin"
                    pattern="\d{8}"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className={"form-control regInput"}
                    type={"text"}
                    placeholder={"Address"}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {!loading ? (
                  <button
                    className={"btnAuth"}
                    type="submit"
                    onClick={handleSignup}
                    style={{
                      // marginTop: "2rem",
                      fontSize: "16px",
                      fontFamily: "arial",
                      fontWeight: "bold",
                    }}
                  >
                    SUBMIT
                  </button>
                ) : (
                  <div
                    class="spinner-border text-success"
                    style={{ marginLeft: "42%" }}
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {/* <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
