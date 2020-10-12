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
      <Link to="/"><img src="https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo.png"
        style={{ width: "40%", marginLeft: "29%", marginBottom: "3%" }}
        alt="icon" /></Link>
      <div className={'rightBox2'}>
        <div className={'box'}>
          <div className={'titleAuth'}> Login  </div>
          <div className={''}>
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

          <button className={'btnAuth'} onClick={handleLogin}>Sign In</button>

          {/* <p>Forgot your password</p> */}

        </div>
      </div>
    </div>

  );
};

export default Login;