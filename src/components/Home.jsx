import React, { Component, useState } from "react";
import "../componentscss/Home.css";
import Requests from "../components/Requests";
import SidenavBar from "./SidenavBar";
import { Route, Router, withRouter } from "react-router-dom";
import Navbar from "./Navbar";

export const Home = ({ user }) => {
  return (
    <>
      <div>
        <div>
          <Requests user={user} />
        </div>
      </div>
      <div
        className={"authBox"}
        style={{
          border: "1px solid red",
        }}
      >
        <div className="home-bg2"></div>
        <h1
          style={{
            fontSize: "36px",
            fontFamily: "arial",
            color: "white",
            marginTop: "12%",
            marginBottom: "3%",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome Back
        </h1>
        <div className={"rightBox2"} align-items-center>
          <div className={"box"}>
            {/* <div className={'titleAuth'}> Login  </div> */}
            <div
              className={"emailInputlogin"}
              style={{ fontSize: "14.43px", fontFamily: "arial" }}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Choose a Currency"
                autoFocus
                required
              />
            </div>

            <div
              className={""}
              style={{ fontSize: "14.43px", fontFamily: "arial" }}
            >
              <input
                className={"form-control"}
                type={"password"}
                placeholder={"Amount"}
                required
              />
            </div>

            <p
              style={{
                marginTop: "2rem",
                fontSize: "16px",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            >
              Forgot Your Password
            </p>

            <button className={"btnAuth"}>
              <i
                class="fas fa-lock"
                style={{
                  fontSize: "18px",
                  fontFamily: "arial",
                  fontWeight: "bold",
                }}
              ></i>
              Log in
            </button>

            {/* <p>Forgot your password</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
