// Modules used for this project or page-----------------------------------------
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './login';
import Register from './Register';
//-------------------------------------------------------------------------------

const Hub = ({isLoginOpen,isRegisterOpen,user,loginSection,registerSection, email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError,setName,name,last_name,setLastName,phone,setPhone,address,setAddress}) => {
    return (
        <div>
            {/* <h1>hello</h1> */}
            {
                isLoginOpen && !isRegisterOpen && !user &&
                <Login
                loginSection = {loginSection}
                registerSection = {registerSection}
                email = {email}
                setEmail ={setEmail}
                password = {password}
                setPassword = {setPassword}
                handleLogin = {handleLogin}
                handleSignup = {handleSignup}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError = {passwordError}
                />}
                {isRegisterOpen && !isLoginOpen && !user &&
                <Register
                loginSection = {loginSection}
                registerSection = {registerSection}
                email = {email}
                setEmail ={setEmail}
                password = {password}
                setPassword = {setPassword}
                name={name}
                setName={setName}
                last_name={last_name}
                setLastName={setLastName}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                handleLogin = {handleLogin}
                handleSignup = {handleSignup}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError = {passwordError}
                />}

        </div>
    )
}

export default Hub
