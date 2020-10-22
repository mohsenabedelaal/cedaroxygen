import React from "react";
import "../componentscss/Home3.css";

const Home3 = () => {
  return (
    <div className="container-fluid bg2 text-center justify-content-center">
      <h1
        className="col-12"
        style={{
          fontSize: "36px",
          padding: "1%",
          paddingTop: "10%",
          fontWeight: "bold",
          // border: "1px solid green",
          fontFamily: "arial",
          marginTop: "0%",
        }}
      >
        Why to Trade With CEDAR OXYGEN?
      </h1>
      <p
        style={{
          fontSize: "24px",
          padding: "1%",
          // border: "1px solid blue",
          fontFamily: "arial",
        }}
      >
        Simple and transparent access to currency
      </p>
      <div
        className="container justify-content-center"
        style={{
          // border: "1px solid yellow",
          WebkitAlignContent: "center",
        }}
      >
        <div
          className="row"
          style={{
            // border: "1px solid red",
            fontFamily: "arial",
            width: "100%",
            marginTop: "7%",
          }}
        >
          <div
            className="col justify-content-center"
            style={{
              // border: "1px solid green",
              margin: "0%",
            }}
          >
            <i
              className="fas fa-mobile-alt justify-content-center"
              style={{
                fontSize: "48px",
                color: "#25DAC5",
                marginBottom: "1rem",
                // marginLeft: "45%",
              }}
            ></i>
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                fontFamily: "arial",
              }}
            >
              Fast and Secure Platform
            </p>
            <hr
              style={{
                width: "7rem",
                background: "red",
                height: "2px",
              }}
            />
            <p
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Transactions performed on our platform are all fast and secure
            </p>
          </div>
          <div className="col-sm">
            <i
              className="fas fa-chart-pie"
              style={{
                fontSize: "48px",
                color: "#25DAC5",
                marginBottom: "1rem",
                // marginLeft: "45%",
              }}
            ></i>
            <p
              style={{
                fontSize: "18",
                textAlign: "center",
                fontFamily: "arial",
              }}
            >
              Easy and Effortless
            </p>
            <hr
              style={{
                width: "7rem",
                background: "red",
                height: "2px",
                marginBottom: "1rem",
                fontFamily: "arial",
              }}
            />
            <p
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Cedar Oxygen's intuitive interface makes trading easier for
              everyone
            </p>
          </div>

          <div className="col-sm">
            <i
              className="fas fa-comments"
              style={{
                fontSize: "48px",
                color: "#25DAC5",
                marginBottom: "1rem",
                // marginLeft: "45%",
              }}
            ></i>
            <p
              style={{
                textAlign: "center",
                fontFamily: "arial",
                fontSize: "18px",
              }}
            >
              Excellent Support
            </p>
            <hr
              style={{
                width: "7rem",
                background: "red",
                height: "2px",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Cedar Oxygen's excellent support team is available to help you, 5
              days/week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
