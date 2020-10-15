// Modules used for this project or page-----------------------------------------
import React, { Component, useEffect, useState, useContext } from 'react'
import Login from './components/login.jsx';
import fire from './firebase/firebase';
import Register from './components/Register.jsx';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter, IndexRoute } from "react-router-dom";
import Hub from './components/Hub.jsx';
import Home from './components/Home'
import Navbar from './components/Navbar';
import { Button, Modal, Header, Body, Footer } from 'react-bootstrap'
import ModalPop from './components/ModalPop';
import Profile from './components/Profile.jsx';
import axios from 'axios';
import Footering from './components/Footer.jsx';
import Navbarn from './components/Navbarn.jsx';
import Home2 from './components/Home2.jsx';
import Testingz from './components/Testingz';
import Home3 from './components/Home3.jsx';
import { HashLink } from 'react-router-hash-link';
import Requests from "./components/Requests";
import RequestList from "./components/RequestList";
// ------------------------------------------------------------------------------


// This is the App Component -----------------------------------------------------
const App = () => {


  // These are the states that will be used in the project------------------------
  const [user, setUser] = useState(localStorage.getItem('email'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [primary, setPrimary] = useState(0);
  const [second, setSecond] = useState(0);
  const [rates, setRates] = useState('')
  // ------------------------------------------------------------------------------



  // This function is to clear the inputs values ---------------------------------------------------------
  const clearInputs = () => {
    setEmail('');
    setPassword('')
  }


  // -----------------------------------------------------------------------------------------------------

  // function to clear the errors -----------------------------------------------------------------------
  const clearErrors = () => {

    setEmailError('');
    setPasswordError('');
  }


  // -----------------------------------------------------------------------------------------------------

  // function responsible for login using api -------------------------------------------------

  const handleLogin = () => {
    clearErrors();

    axios.get("/login?username=" + email + "&password=" + password)
      .then(res => res.data).then(response => {
        if (response == 'True') {
          console.log(response)
          console.log("Welcome")
          setUser(email)
          localStorage.setItem('email', email)
          localStorage.setItem('password', password)
          window.location.reload()
        } else {
          console.log(response)
          setEmailError("Check Your Email")
          setPasswordError("Check Your Password")
          clearInputs();
        }
      })
  }

  console.log(localStorage.getItem('email'))

  if (localStorage.getItem('email')) {
    console.log("in")
  } else {
    console.log("out")
  }

  // -----------------------------------------------------------------------------------------------------

  // function responsible for sign up using api -------------------------------------------------
  const handleSignup = () => {
    clearErrors();

    if (!name || !phone || !last_name || !email || !password || !address) {
      alert("Fill the Form")
    } else {
      axios.post("/api/clients/add?name=" + name + "&last_name=" + last_name + "&phone=" + phone + "&address=" + address + "&username=" + email + "&password=" + password)
        .then(res => console.log(res.data)).then(response => { handleLogin() }).catch(err => console.log(err))
    }

  }

  // -----------------------------------------------------------------------------------------------------

  // function for logout----------------------------------------------------------------------------------
  const handleLogout = () => {
    // fire.auth().signOut();
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "http://localhost:3000/"
    // handleShow();
    // props.history.push('/');
    // history.push('/');
    // console.log(user.email)
  }

  // -----------------------------------------------------------------------------------------------------



  // const [bdl_rate,setBdlRate] =useState(0);

// converter-----------------------------------------------------------------------------------------------------
  const handleConverterInput = (e) => {
    setPrimary(e.target.value)

  }

  const handleConverterDrop = (e) => {
    if (e.target.value == "dollar" && rates) {
      setSecond(primary * rates[0].platform_rate + " LBP")
    }
    if (e.target.value == "lira" && rates) {
      setSecond(primary / rates[0].platform_rate + " $")
    }
  }

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
          <Navbarn handleLogout={handleLogout} user={user} handleShow={handleShow} />
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
            {user != "admin@admin.com" ?
            <div class="container-fuild" style={{ height:"100%",width:"100%",backgroundImage:"url(https://cedaroxygen.com/wp-content/uploads/2020/07/Cedar-Oxygen_Cedar-scaled.jpg)",backgroundSize:"cover" ,backgroundPosition:"center" }}>
            <div class="row">
            <div class="col">
            <Requests user={user} />
            </div>
            <div class="col">
            <RequestList user={user}/>
            </div>
            </div>

          </div> :
          <>
          <div className="home-bg3"/>
          <RequestList user={user}/></>

           }

        </Route>

      {/* ------------------------------------------------------------------------------ */}


      {/* ----(Main page)--------------------------------------------------------------- */}
        <Route path="/tester" exact>

          <Navbar handleLogout={handleLogout} user={user} handleShow={handleShow} />
          <div className="home-bg"></div>
          {/* {user ? <></> :
            <>
              <Button variant="primary" style={{ marginLeft: "40rem" }} onClick={handleShow}>
                Make Your Request Now
      </Button>
              <ModalPop
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
                // onHide={handleClose}
                setEmail={setEmail}
                emailError={emailError}
                setPassword={setPassword}
                passwordError={passwordError}
                handleLogin={handleLogin}
              />
            </>} */}
          {/* <button onClick={handleLogout}>Logout</button> */}
          {/* <div className="row col-md-6">
            <div className="card" style={{ width: "18rem", marginLeft: "15rem", }}>
              <div className="card-header">
                Converter
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">

                  <input type="number" className="form-control" id="basic-url" placeholder="Enter Value $ or LBP" name="primary" value={primary} onChange={handleInputCon} aria-describedby="basic-addon3" />
                </li>
                <li className="list-group-item"><label htmlFor="inputAction">Curreny</label>
                  <select id="inputAction" name="action" className="form-control" onChange={handleInputCon2}>

                    <option value="..." defaultValue >Choose Currency</option>
                    <option value="sell" >Dollar</option>
                    <option value="buy">Lira</option>
                  </select></li>
                <li className="list-group-item"><input readOnly type="number" name="second" value={second} className="form-control" id="basic-url" aria-describedby="basic-addon3" /></li>
              </ul>
            </div>

          </div>
          <div className="card " style={{ width: "18rem", marginLeft: "15rem", marginTop: "1rem" }}>
            <div className="card-header">
              Dollar Rate
  </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Black Market 1$ = 8000 LBP</li>
              <li className="list-group-item"><label htmlFor="inputAction">Official Rate 1$ = 1515 LBP</label></li>
              <li className="list-group-item"> Saraf Rate 1$ = 3900 LBP</li>
            </ul>
          </div> */}

          <div className="m-3">
            <div class="card-columns">
              <div class="card" style={{ backgroundColor: "#005454", color: "white" }}>
                <div class="card-body">
                  <h5 class="card-title">BDL Dollar Rate</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                  <input className="card-text" readOnly={true} value="1 $" /><br /> <label>=</label><br /> <input className="card-text" readOnly={true} value={rates ? rates[0].bdl_rate + " LBP" : 0 + "LBP"} />
                </div>
              </div>
              <div class="card" style={{ backgroundColor: "#005454", color: "white", paddingLeft: "17%" }}>
                <div class="card-body">
                  <h5 class="card-title">Black Market Dollar Rate</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                  <input className="card-text" readOnly={true} value="1 $" /><br /> <label>=</label><br />
                  <input className="card-text" readOnly={true} value={rates ? rates[0].black_market_rate + " LBP" : 0 + "LBP"} />
                </div>
              </div>
              <div class="card" style={{ backgroundColor: "#005454", color: "white", paddingLeft: "17%" }}>
                <div class="card-body">
                  <h5 class="card-title">Platform Dollar Rate</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                  <input className="card-text" readOnly={true} value="1 $" /><br /> <label>=</label><br />
                  <input className="card-text" readOnly={true} value={rates ? rates[0].platform_rate + " LBP" : 0 + "LBP"} />
                </div>
              </div>
            </div>

            <div class="card col-5" style={{ backgroundColor: "#005454", color: "white" }}>
              <div class="card-body">
                <h5 class="card-title">Converter</h5>
                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                {/* <input className="card-text" readOnly={true} value="1 $" /><br/> <label>=</label><br/> */}
                {/* <input className="card-text" readOnly={true} value={rates ? rates[0].platform_rate+" LBP" : 0+"LBP" } /> */}
                <div class="input-group">
                  <input type="number" class="form-control" onChange={handleConverterInput} aria-label="Text input with dropdown button" placeholder="Enter Amount in $ or LBP" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary dropdown-toggle bg-primary" style={{ color: "white" }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose A Currency</button>
                    <div class="dropdown-menu">
                      <option class="dropdown-item" style={{ cursor: "pointer" }} value="dollar" onClick={handleConverterDrop}>US Dollar</option>
                      <option class="dropdown-item" style={{ cursor: "pointer" }} value="lira" onClick={handleConverterDrop}>Lebanese Lira</option>
                    </div>
                  </div>

                </div>
                <input type="text" className="form-control mt-3" aria-label="Text input with dropdown button" value={second} disabled readOnly />
              </div>
            </div>


          </div>

        </Route>
          {/* ------------------------------------------------------------------------------------------------------------------------------ */}

          {/* profile Route------------------------------------------------------------------------------------------------------------------ */}

        <Route path="/profile" exact>

          <Navbar handleLogout={handleLogout} user={user} handleShow={handleShow} />
          <Profile user={user} />
        </Route>
          {/* --------------------------------------------------------------------------------------------------------------------------- */}
          <Route path="/" exact>
          <Navbarn handleLogout={handleLogout} user={user}/>

          <Home2 />
          <div
          style={{
            backgroundColor: "#005454",
            // border: "2px solid green",
            height: "20vh",
          }}></div>

           <Home3/>
           <Footering/>
           </Route>
           <Route path="/registration" exact>
           <Navbarn handleLogout={handleLogout} user={user}/>
           {user ? <></>:
           <div id="register"><Register
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
              /></div>}



          </Route>



          <Route path="/www" exact>
            <Testingz/>
          </Route>

          {/* Registration route--------------------------------------------------------------------------------------------------------- */}

        {!user ?
          <>
            <Route path="/registration" exact>
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
            <Navbarn handleLogout={handleLogout} user={user}/>
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
              />
            </Route>
          </> : <Redirect to="/" exact />


        }
     {/* ---------------------------------------------------------------------------------------- */}
     {/* --Testing Route-------------------------------------------------------------------------- */}






     {/* ----------------------------------------------------------------------------------------- */}
     </Switch>
      </Router>

    {/* ------------------------------------------------------------------------------------------- */}

    </div>

  )


}
export default App;