import React from 'react';
import '../App.css';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

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
    <div className={'authBox'}>

      <div className="home-bg2"></div>
      <h1 style={{ color:"white", marginTop:"12%",marginLeft:"28%",marginBottom:"3%",fontWeight:"bold" }}>Welcome Back</h1>
      <div className={'rightBox2'}>
        <div className={'box'}>
          {/* <div className={'titleAuth'}> Login  </div> */}
          <div className={'emailInputlogin'}>
            <input
              className='form-control'
              type='text'
              placeholder='Email'
              autoFocus
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <p className={'errorMsg'}>{emailError}</p>
          <div className={''} >
            <input
              className={'form-control'}
              type={'password'}
              placeholder={'Password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <p className={'errorMsg'}>{passwordError}</p>

          <p style={{ marginTop:"2rem",marginLeft:"4rem" }}>Forgot Your Password</p>

          <button className={'btnAuth'} onClick={handleLogin}><i class="fas fa-lock" style={{ marginRight:"10px" }}></i>Log In</button>

          {/* <p>Forgot your password</p> */}

        </div>
      </div>
    </div>

  );
};

export default Login;