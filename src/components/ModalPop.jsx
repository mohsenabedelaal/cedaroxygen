import React,{useState} from 'react';
import { Button,Modal ,Header,Body,Footer } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect ,withRouter} from "react-router-dom";
const ModalPop = ({show,setShow,handleClose,handleShow,setEmail,emailError,setPassword,passwordError,handleLogin}) => {

    return (
        <div>


      <Modal
      show={show}
       onHide={handleClose}
       setEmail={setEmail}
        emailError={emailError}
         setPassword={setPassword}
         passwordError={passwordError}
         handleLogin={handleLogin}
         >
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div class="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={e=>setEmail(e.target.value)}   id="recipient-name"/>
            {/* <h1>{name}</h1> */}
          </div>
          <p className='errorMsg'>{emailError}</p>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Password</label>
            <input className="form-control"   type="password" name="password" onChange={e=>setPassword(e.target.value)}  id="message-text"/>
          </div>
          <p className='errorMsg' >{passwordError}</p>
          <button className='btnAuth' onClick={handleLogin}>Sign In</button>

          </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <p variant="primary">If you don't have an account press resister</p>
          <Link to="/login-register-page">Resister</Link>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default ModalPop
