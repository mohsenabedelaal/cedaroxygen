import React from 'react';
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

  return (
    <div className={'authBox'}>
      <div className="home-bg2"></div>

      <Link to="/"><img src="https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo.png"
        style={{ width: "40%", marginLeft: "29%", marginBottom: "3%" }}
        alt="icon" /></Link>
      <div className={'rightBox'}>
        <div className={'box'}>
          <div className={'titleAuth'}> Join  </div>


          <div className="mb-2">
            <input
              className={'form-control'}
              type={'text'}
              placeholder={'Email'}
              autoFocus
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {/* <p className={'errorMsg'}>{emailError}</p> */}
          <div className="mb-2" >
            <input
              className={'form-control'}
              type={'password'}
              placeholder={'Password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
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

          <button className={'btnAuth'} onClick={handleSignup}>Register</button>

        </div>
      </div>
    </div>
  );
}

export default Register;
