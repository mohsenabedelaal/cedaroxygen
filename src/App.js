// Modules used for this project or page-----------------------------------------
import React, {
  Component,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import Login from "./components/login.jsx";
import fire from "./firebase/firebase";
import Register from "./components/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  IndexRoute,
} from "react-router-dom";
import Hub from "./components/Hub.jsx";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Button, Modal, Header, Body, Footer } from "react-bootstrap";
import ModalPop from "./components/ModalPop";
import Profile from "./components/Profile.jsx";
import axios from "axios";
import Footering from "./components/Footer.jsx";
import Navbarn from "./components/Navbarn.jsx";
import Home2 from "./components/Home2.jsx";
import Testingz from "./components/Testingz";
import Home3 from "./components/Home3.jsx";
import { HashLink } from "react-router-hash-link";
import Requests from "./components/Requests";
import RequestList from "./components/RequestList";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { Spinner, Accordion, Card, Toast } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "./App.css";
// ------------------------------------------------------------------------------

// This is the App Component -----------------------------------------------------
const App = () => {
  // These are the states that will be used in the project------------------------
  const [user, setUser] = useState(localStorage.getItem("email"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [primary, setPrimary] = useState(0);
  const [second, setSecond] = useState(0);
  const [rates, setRates] = useState("");
  const [loading, setLoading] = useState(false);
  const [converter, setConverter] = useState({ selected: "", amount: 0 });
  const [actions, setAction] = useState("Buy")
  // ------------------------------------------------------------------------------
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if(user){
      axios.get("http://fx-p2p-platform.herokuapp.com/api/clients/listall")
        .then(res => {

          // console.log(res.data ? res.data.map(user=>{}):"loading");
          // console.log(res.data)
          // setUsers(res.data)
          if(res.data){
            for(var i = 0; i <= res.data.length; i++){
              if(res.data[i].username == user){
                // console.log("inside loop")
                // console.log("found him",res.data[i].username)
                // console.log("name is ",res.data[i])
                let name = res.data[i].name
                // let last = res.data[i][ 'last name' ]
                // console.log("hyda l esmee",name)
                name = name.charAt(0).toUpperCase() + name.slice(1)
                setUsername(name)
                localStorage.setItem("username", name)
                break
              }
            }
            // console.log("2na dsadasdas",username);
          }
        }
          //
        ).catch(err => {alert(err)
          console.log(err)})}
    }, []);

  // This function is to clear the inputs values ---------------------------------------------------------
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  // -----------------------------------------------------------------------------------------------------


  // function to clear the errors -----------------------------------------------------------------------
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // -----------------------------------------------------------------------------------------------------

  // function responsible for login using api -------------------------------------------------

  const handleLogin = () => {
    clearErrors();
    setLoading(true);
    axios
      .get(
        "http://fx-p2p-platform.herokuapp.com/login?username=" +
          email +
          "&password=" +
          password
      )
      .then((res) => res.data)
      .then((response) => {
        if (response == "True") {
          console.log(response);
          console.log("Welcome");
          setUser(email);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          setLoading(false);
          window.location.href = "https://cedars-oxygen-8a47a.web.app/";
        } else {
          console.log(response);
          setEmailError("Check Your Email");
          setPasswordError("Check Your Password");
          clearInputs();
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  console.log(localStorage.getItem("email"));

  if (localStorage.getItem("email")) {
    console.log("in");
  } else {
    console.log("out");
  }

  // -----------------------------------------------------------------------------------------------------

  // function responsible for sign up using api -------------------------------------------------
  const handleSignup = () => {
    clearErrors();

    // alert(typeof phone)
    // alert()

    if (!name || !phone || !last_name || !email || !password || !address) {
      alert("Fill the Form");
      return;
    }
    if (isNaN(phone)) {
      alert("Write Your Phone Number in Numbers");
      return;
    } else {
      setLoading(true);
      axios
        .post(
          "http://fx-p2p-platform.herokuapp.com/api/clients/add?name=" +
            name +
            "&last_name=" +
            last_name +
            "&phone=" +
            phone +
            "&address=" +
            address +
            "&username=" +
            email +
            "&password=" +
            password
        )
        .then((res) => console.log(res.data))
        .then((response) => {
          handleLogin();
        })
        .catch((err) => console.log(err));
    }
  };

  // -----------------------------------------------------------------------------------------------------

  // function for logout----------------------------------------------------------------------------------
  const handleLogout = () => {
    // fire.auth().signOut();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("username")
    // window.location.href = "http://localhost:3000/"
    window.location.href = "https://cedars-oxygen-8a47a.web.app/";
    // handleShow();
    // props.history.push('/');
    // history.push('/');
    // console.log(user.email)
  };

  // -----------------------------------------------------------------------------------------------------

  // const [bdl_rate,setBdlRate] =useState(0);

  // converter-----------------------------------------------------------------------------------------------------
  const handleConverterInput = (e) => {
    setPrimary(e.target.value);
  };

  const handleConverterDrop = (e) => {
    if (e.target.value == "dollar" && rates) {
      setSecond(primary * rates[0].platform_rate + " LBP");
    }
    if (e.target.value == "lira" && rates) {
      setSecond(primary / rates[0].platform_rate + " $");
    }
  };

  //-----------------------------------------------------------------------------------------

  //When the page logs the rates are rendered -----------------------------------------------

  // useEffect(() => {

  //   axios.get("/rates/listall")
  //     .then(res => {
  //       console.log(res.data);
  //       setRates(res.data);
  //     }).catch(err => console.log(err))
  // }, [])

  //-------------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------------
  return (
    <div className="authbox">
      {/* -------------Router----------------------------------------------------------- */}
      <Router>
        <Switch>
          {/* request route---------------------------------------------------------------- */}

          <Route path="/requestpage" exact>
            {!user ? <Redirect to="/" /> : <></>}

            <Navbarn
              handleLogout={handleLogout}
              user={user}
              handleShow={handleShow}
              username={username}
            />
            {/* <Requests user={user} />  */}
            {/* <div className="home-bg3" /> */}
            {/* <div class="grid-container">

            <div class="nav-bar">
            <Navbarn handleLogout={handleLogout} user={user} handleShow={handleShow} />
            </div>
            <div class="submit">
            <Requests user={user} />
            </div>
            <div class="table">
            <RequestList user={user}/>
            </div>
            </div> */}
            {user != "admin@admin.com" ? (
              <div
                className="container-fuild authBox"
                style={{ margin: "0%", position: "absolute", width: "100%" }}
              >
                <div className="row" style={{ marginTop:"10%" }}>
                  <div className="col">
                    <Requests user={user} converter={converter} setConverter={setConverter} actions={actions} username={username}/>
                  </div>
                  <div class="col" style={{ marginRight:"3%" }}>
                    <RequestList user={user} />
                  </div>
                </div>
              </div>
            ) : (
              <>
              <div
                className="container-fuild authBox"
                style={{ margin: "0%", position: "absolute", width: "100%" }}
              >
                {/* <div className="home-bg3" /> */}
                <RequestList user={user} />
                </div>
                {/* <div
                className="container-fuild authBox"
                style={{ margin: "0%", position: "absolute", width: "100%" }}
              >
                <div className="row" style={{ marginTop:"10%" }}>
                  <div className="col">
                    <Requests user={user} converter={converter} setConverter={setConverter} actions={actions}/>
                  </div> */}
                  {/* <div class="col" style={{ marginRight:"3%" }}>
                    <RequestList user={user} />
                  </div> */}
                {/* </div> */}
              {/* </div> */}
              </>
            )}
          </Route>

          {/* ------------------------------------------------------------------------------ */}

          {/* --------------------------------------------------------------------------------------------------------------------------- */}
          <Route path="/" exact>
            <Navbarn handleLogout={handleLogout} user={user} username={username}/>
            <Home2
              user={user}
              converter={converter}
              setConverter={setConverter}
              actions={actions}
              setAction={setAction}
            />
            <div
              className="jumbotron jumbotron-fluid"
              style={{
                backgroundColor: "#005454",
                margin: "0%",
                // height: "50vh",
                // padding: "0%",
              }}
            ></div>

            <Home3 />
            <div
              className="jumbotron jumbotron-fluid"
              style={{
                backgroundColor: "#005454",
                // border: "2px solid transparent",
                // height: "20vh",
              }}
            >
              <div
                className="container"
                style={{
                  border: "2px solid transparent",
                  // height: "100%",
                }}
              >
                <div
                  className="row py-4 d-flex align-self-center"
                  style={{
                    border: "2px solid transparent",
                    marginTop: "1%",
                  }}
                >
                  <div
                    className="col-md-8 col-lg-8 text-center text-md-left align-self-center"
                    // style={{ border: "2px solid transparent", width: "100vw" }}
                  >
                    <h5 className="mb-0 text-white">
                      Get involved in investing and supporting Lebanese
                      manufacturers
                    </h5>
                  </div>

                  <div className="col-md-2 col-lg-4 text-center align-self-center">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      style={{
                        height: "150%",
                        width: "50%",
                        backgroundColor: "#33c7bf",
                        border: "1px solid #33c7bf",
                        borderRadius: "2rem",
                      }}
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Footering />
          </Route>



          <Route path="/registration" exact>
            <Navbarn handleLogout={handleLogout} user={user} username={username}/>
            {user ? (
              <></>
            ) : (
              <div id="register">
                <Register
                  // loginSection = {loginSection}
                  // registerSection = {registerSection}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  name={name}
                  setName={setName}
                  last_name={last_name}
                  setLastName={setLastName}
                  phone={phone}
                  setPhone={setPhone}
                  address={address}
                  setAddress={setAddress}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                  loading={loading}
                />
              </div>
            )}
          </Route>

          {/* Registration route--------------------------------------------------------------------------------------------------------- */}

          {!user ? (
            <>
              <Route path="/registration" exact>
                {user ? <Redirect to="/" /> : <></>}
                <Register
                  // loginSection = {loginSection}
                  // registerSection = {registerSection}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  name={name}
                  setName={setName}
                  last_name={last_name}
                  setLastName={setLastName}
                  phone={phone}
                  setPhone={setPhone}
                  address={address}
                  setAddress={setAddress}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
              </Route>
              {/* ---------------------------------------------------------------------------------- */}

              {/* Login route------------------------------------------------------------------------ */}
              <Route path="/login" exact>
                <Navbarn
                  handleLogout={handleLogout}
                  user={user}
                  firstName={name}
                  username={username}
                />
                <Login
                  // loginSection = {loginSection}
                  // registerSection = {registerSection}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                  loading={loading}
                />
              </Route>
            </>
          ) : (
            <Redirect to="/" exact />
          )}
          {/* ---------------------------------------------------------------------------------------- */}
          {/* --Testing Route-------------------------------------------------------------------------- */}

          {/* ----------------------------------------------------------------------------------------- */}
        </Switch>
      </Router>

      {/* ------------------------------------------------------------------------------------------- */}
    </div>
  );
};
export default App;
