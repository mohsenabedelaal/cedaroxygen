import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "../componentscss/Home2.css";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home2 = () => {
  const [show, setShow] = useState(true);
  const [rates, setRates] = useState("");

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/rates/listall")
      .then((res) => {
        console.log(res.data);
        setRates(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "82vh",
          // border: "1px solid red"
        }}
      >
        <div
          className="row align-items-stretch"
          style={{
            // border: "1px solid green",
            height: "100%",
            marginTop: "6%",
            marginLeft: "0%",
            marginRight: "0%",
          }}
        >
          <div
            className="col-6"
            style={{
              width: "100vw",
              // border: "1px solid blue",
              padding: "5%",
              paddingTop: "7%",
            }}
          >
            <h1
              style={{
                fontFamily: "arial",
                fontSize: "47.69px",
                fontWeight: "bold",
                align: "justify",
              }}
            >
              Cedar Oxygen is <br />
              committed to Lebanon
              <br />
              and its industry
            </h1>
            <h4
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                fontWeight: "bold",
                align: "justify",
              }}
            >
              Join us to get the best exchange rate
            </h4>
            <p
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                align: "justify",
              }}
            >
              The world's banking systems weren'tdesigned for people without
              borders. <br />
              That's why we're building a new one.
            </p>
            <ol
              style={{
                fontFamily: "arial",
                fontSize: "16px",
                fontWeight: "bold",
                align: "justify",
              }}
            >
              <li style={{ fontFamily: "arial", color: "rgb(37, 218, 197)" }}>
                <span style={{ align: "justify", color: "white" }}>
                  Be radically transparent
                </span>
              </li>
              <li
                style={{
                  fontFamily: "arial",
                  align: "justify",
                  color: "rgb(37, 218, 197)",
                }}
              >
                <span
                  style={{
                    fontFamily: "arial",
                    align: "justify",
                    color: "white",
                  }}
                >
                  Charge as little as possible
                </span>
              </li>
              <li style={{ align: "justify", color: "rgb(37, 218, 197)" }}>
                <span style={{ align: "justify", color: "white" }}>
                  Make premium the new
                </span>
              </li>
            </ol>
          </div>
          <div
            className="col-6"
            style={{
              // border: "1px solid yellow",
              padding: "5%",
              paddingLeft: "15%",
              width: "100vw",
              margin: "0%",
              paddingTop: "7%",
            }}
          >
            <label
              htmlFor="upper"
              style={{
                width: "100%",
                color: "white",
                fontFamily: "arial",
                fontSize: "20.25px",
                fontWeight: "bold",
              }}
            >
              {show
                ? "Cedar Oxygen Platform Dollar Rate"
                : "Official Dollar Rate"}
            </label>

            <input
              type="text"
              id="upper"
              name="upper"
              placeholder="You're exchanging"
              value={rates ? rates[0].platform_rate : 0}
              style={{
                width: "60%",
                height: "9vh",
                borderTopLeftRadius: "1.3rem",
                borderBottomLeftRadius: "1.3rem",
                fontFamily: "arial",
                fontSize: "21.65px",
                margin: "0%",
                padding: "0%",
                paddingLeft: "5%",
                border: "none",
              }}
            />

            {/* <ReactFlagsSelect
              countries={["US", "LB"]}
              defaultCountry="LB"
              customLabels={{ US: "USD", LB: "LBP" }}
              style={{
                backgroundColor: "black",
                // fontWeight: "bold",
                // fontFamily: "arial",
                // fontSize: "22.06px",
                color: "black",

              }} />*/}
              <ReactFlagsSelect
                    countries={["US", "LB"]}
                    defaultCountry="LB"
                    customLabels={{ US: "USD", LB: "LBP" }}
                    // style={{ backgroundColor: "black" }}
                  />


            <p
              style={{ marginLeft: "0%", marginTop: "5%", marginBottom: "5%" }}
            >
              <a
                role="button"
                onClick={() => setShow(!show)}
                style={{ color: "#33c7bf", paddingLeft: "5%" }}
              >
               {show ? <i
                  className="fas fa-angle-double-down"
                  data-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
               ></i> :
               <i class="fas fa-angle-double-up" data-toggle="collapse"
               href="#multiCollapseExample1"
               role="button"
               aria-expanded="false"
               aria-controls="multiCollapseExample1"></i> }
              </a>
            </p>

            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div
                style={{
                  color: "black",
                  marginLeft: "0%",
                  marginBottom: "5%",
                }}
              >
                <label
                  htmlFor="hidden"
                  style={{
                    color: "white",
                    fontFamily: "arial",
                    fontSize: "20.25px",
                    fontWeight: "bold",
                  }}
                >
                  Lebanese Dollar Rate
                </label>
                <br />
                <input
                  type="text"
                  id="hidden"
                  name="upper"
                  placeholder="You're exchanging"
                  value={rates ? rates[0].bdl_rate : 0}
                  style={{
                    borderTopLeftRadius: "1.3rem",
                    borderBottomLeftRadius: "1.3rem",
                    width: "60%",
                    height: "9vh",
                    margin: "0%",
                    fontFamily: "arial",
                    fontSize: "21.65px",
                    border: "none",
                  }}
                />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect
                  countries={["US", "LB"]}
                  defaultCountry="LB"
                  customLabels={{ US: "USD", LB: "LBP" }}
                  style={{
                    color: "black",
                    height: "15%",
                    margin: "0%",
                  }}
                />
              </div>
            </div>

            <div style={{ color: "black" }}>
              {show ? (
                <>
                  <Link to="/registration">
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "#25DAC5",
                        fontWeight: "bold",
                        fontFamily: "arial",
                        fontSize: "16px",
                        border: "none",
                        textAlign: "left",
                        borderBottomLeftRadius: "1.3rem",
                        borderTopLeftRadius: "1.3rem",
                        height: "9vh",
                        width: "60%",
                        margin: "0%",
                        paddingLeft: "5%",
                        border: "none",
                      }}
                    >
                      REGISTER HERE TODAY >{" "}
                    </button>
                  </Link>
                  <ReactFlagsSelect
                    countries={["US", "LB"]}
                    defaultCountry="LB"
                    customLabels={{ US: "USD", LB: "LBP" }}
                    style={{ backgroundColor: "black" }}
                  />
                </>
              ) : (
                <>
                  {/* <input type="number" role="button" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} >Register</input> */}
                  <label
                    htmlFor="lower"
                    style={{
                      color: "white",
                      fontFamily: "arial",
                      fontSize: "20.25px",
                      fontWeight: "bold",
                    }}
                  >
                    Black Market Rate
                  </label>
                  <br />
                  <input
                    type="text"
                    id="lower"
                    name="upper"
                    placeholder="You're exchanging"
                    value={rates ? rates[0].black_market_rate : 0}
                    style={{
                      borderTopLeftRadius: "1.3rem",
                      borderBottomLeftRadius: "1.3rem",
                      width: "60%",
                      margin: "0%",
                      fontFamily: "arial",
                      fontSize: "21.65px",
                      height: "9vh",
                      border: "none",
                    }}
                  />
                  {/* <ReactFlagsSelect defaultCountry="US"/> */}
                  <ReactFlagsSelect
                    countries={["US", "LB"]}
                    defaultCountry="LB"
                    customLabels={{ US: "USD", LB: "LBP" }}
                    style={{ backgroundColor: "black" }}
                  />
                </>
              )}
              {/* <label htmlFor="lower" style={{ color:"white" }}>Black Market Rate</label><br/>
                <input type="number" id="lower" name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />

                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="LB"
                 customLabels={{"US": "USD","LB": "LBP"}} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
