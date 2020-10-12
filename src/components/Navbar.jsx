import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Button, Modal, Header, Body, Footer } from 'react-bootstrap'




const Navbar = ({ handleLogout, user, handleShow }) => {
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#20B2AA" }} >
        <Link to="/" className="navbar-brand" ><img src="https://cedaroxygen.com/wp-content/uploads/2020/05/Cedar-Oxygen_Logo-favicon.png" width="30" height="30" alt="" />
          <a>edar Oxygen</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li class="nav-item ">
              {user ? <Link className="nav-link active" to="/requestpage">Requests</Link> :
                <Link className="nav-link disabled" to="/requestpage">Requests</Link>}
            </li>
          </ul>
          {user ? <><a class="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i><span class="caret"></span>
          </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <Link class="dropdown-item" to="/profile">Profile</Link>
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div></> :
            <>
              <Link to="/registration"><button class="btn btn-outline-success my-2 my-sm-0" style={{ color: "white" }} >Register</button></Link>
              <Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0 ml-2" style={{ color: "white" }} >Login</button></Link>
            </>}

        </div>
      </nav>
    </div>
  )
}

export default Navbar
