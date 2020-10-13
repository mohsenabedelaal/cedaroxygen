import React, { useState } from 'react';
import '../App.css';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

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
  } = props;

  const[show,setShow] = useState(true)


  return (
    <div class="container-fluid" style={{ backgroundImage: "url(https://cedaroxygen.com/wp-content/uploads/2020/07/Cedar-Oxygen_Cedar-scaled.jpg)", backgroundPosition: "center", backgroundSize: "cover", color: "white" ,height:"45rem"}}>
        <div class="row">
            <div class="col" >
    <div className={'authBox'}>
      {/* <div className="home-bg2"></div> */}

      <h3  style={{ marginLeft: "19%",marginTop:"6%", marginBottom: "3%",fontWeight:"bold" }}>Register and open an account</h3>
      <div className={'rightBox'}>
        <div className={'box'}>
          {/* <div className={'titleAuth'}> Join  </div> */}


          <div className="mb-2">
            <input
              className={'form-control'}
              type={'text'}
              placeholder={'Email'}
              // autoFocus
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
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
          <div class="input-group mb-2">
              <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} value={password}
              placeholder="Password" id="x1x1" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">{show ? <i class="fas fa-eye" role="button" onClick={()=>{setShow(!show)
                document.getElementById("x1x1").type = "text" }}></i>
              : <i class="fas fa-eye-slash" role="button" onClick={()=>{setShow(!show)
                document.getElementById("x1x1").type = "password" }}></i>}</span>
              </div>
              </div>
          {/* <p className={'errorMsg'}>{passwordError}</p> */}
          <div className="mb-2" >
            <input
              className={'form-control'}
              type={'text'}
              placeholder={'First Name'}
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-2" >
            <input
              className={'form-control'}
              type={'text'}
              placeholder={'Last Name'}
              required
              value={last_name}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2" >
            <input
              className={'form-control'}
              type={'number'}
              placeholder={'Phone Number'}
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2" >
            <input
              className={'form-control'}
              type={'text'}
              placeholder={'Address'}
              required
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <button className={'btnAuth'} onClick={handleSignup}>SUBMIT</button>

        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Register;
