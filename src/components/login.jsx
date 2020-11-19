import React from "react";
import "../App.css";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
// import LockIcon from '@material-ui/icons/Lock';

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
    loading,
  } = props;

  // clearErrors();
  // useEffect(() => {
  //   clearErrors()

  // }, [])
  // const [loading,setLoading] = useState(false)

  const onKeyUpValue =(event)=>{
    if(event.charCode === 13){
      handleLogin()
    }
  }







  return (
    <div
      className={"authBox"}
      style={{
        border: "1px solid transparent",
        // marginBottom:"14%"
      }}
    >
      <div className="container-fluid home-bg2"></div>
      <div className="container">
        <div className="row ">
          <div
            className="col"
            style={{
              marginTop: "100px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontFamily: "arial",
                color: "white",
                marginTop: "5%",
                marginBottom: "2%",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Welcome Back
            </h1>
            <div className={"rightBox2"} align-items-center>
              <div
                className={"box"}
                style={{
                  position: "relative",
                  height: "100%",
                  width: "80%",
                  marginTop: "0%",
                  // paddingTop: "10%",
                  marginBottom: "0%",
                }}
              >
                {/* <div className={'titleAuth'}> Login  </div> */}
                <div
                  className={"emailInputlogin justify-content-center"}
                  style={{ fontSize: "14.43px", fontFamily: "arial" }}
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    autoFocus
                    required
                    value={email}
                    readOnly={loading}
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
                    onKeyPress={onKeyUpValue}
                    readOnly={loading}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className={"errorMsg"}>{passwordError}</p>

                <p
                  className="hawa"
                  style={{
                    marginTop: "2rem",
                    fontSize: "16px",
                    fontFamily: "arial",
                    fontWeight: "bold",
                    // marginLeft: "19%",
                    paddingLeft: "12px",
                  }}
                >
                  Forgot your password?
                </p>
                {!loading ? (
                  <button
                    className={"btnAuth"}
                    onClick={handleLogin}
                    style={{
                      width: "60%",
                      border: "none",
                      color: "#33c7bf !important",
                      backgroundColor: "#33c7bf !important",
                      padding: "0%",
                      fontSize: "16px",
                      fontFamily: "arial",
                      fontWeight: "bold",
                      border: "none",
                      marginLeft: "20%",
                    }}
                  >
                    {/* <i
              className="fas fa-lock"
              style={{
                fontSize: "18px",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            ></i> */}
                    <i
                      class="fas fa-lock"
                      style={{
                        marginRight: "2.5%",
                        border: "none",
                        // width: "60%",
                        fontSize: "16px",
                        // fontFamily: "arial",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    ></i>
                    Log in
                  </button>
                ) : (
                  <div
                    class="spinner-border align-self-middle justify-content-center"
                    style={{
                      marginLeft: "45%",
                      color: "#33c7bf",
                    }}
                    role="status"
                  >
                    <span
                      class="sr-only"
                      style={{ color: "#33c7bf", backgroundColor: "#33c7bf" }}
                    >
                      Loading...
                    </span>
                  </div>
                )}

                {/* <p>Forgot your password</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
