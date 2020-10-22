import React, { useState, useEffect, useRef } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "../componentscss/Home2.css";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, Spinner, Accordion, Card, Toast } from "react-bootstrap";
//---------------------------------------------------------------------------

const Home2 = ({ user, converter, setConverter }) => {
  const [show, setShow] = useState(true);
  const [rates, setRates] = useState("");
  const [selected, setSelected] = useState("LB");

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/rates/listall"
      )
      .then((res) => {
        console.log(res.data);
        setRates(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(()=>{
  //   try{
  //   this.refs.userFlag.updateSelected(selected)}
  //   catch{console.log("error")}
  // },[selected])

  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();
  const buttonRef4 = useRef();

  const onSelectFlag = (countryCode) => {
    console.log("hyde l country yalle na2yta", countryCode);
    setSelected(countryCode);
    document.getElementById("main").value = "";
    document.getElementById("SayrafaDollarRate").value = "";
    document.getElementById("PrevailingMarketRate").value = "";
    document.getElementById("officialDollarRate").value = "";
    if (countryCode == "US") {
      buttonRef1.current.updateSelected("LB");
      buttonRef2.current.updateSelected("LB");
      buttonRef3.current.updateSelected("LB");
      // buttonRef4.current.updateSelected("LB");
    } else {
      buttonRef1.current.updateSelected("US");
      buttonRef2.current.updateSelected("US");
      buttonRef3.current.updateSelected("US");
      // buttonRef4.current.updateSelected("US");
    }
  };

  // let firstvisit = 0;

  // if(selected == countryCode){

  //   buttonRef.current.updateSelected("LB")

  // }
  // setSelected(countryCode);
  // buttonRef.current.__proto__.updateSelected("US")
  // if(selected == "US"){
  //   buttonRef.current.updateSelected("LB")
  // }else{
  //   buttonRef.current.updateSelected("US")

  // console.log("shou captain",buttonRef.current.updateSelected(selected))
  const handleConverter = (e) => {
    setConverter({ selected: selected, amount: e.target.value });
    if (selected == "US") {
      rates
        ? (document.getElementById("SayrafaDollarRate").value =
            e.target.value * rates[0].bdl_rate)
        : (document.getElementById("SayrafaDollarRate").value = "Loading...");
      rates
        ? (document.getElementById("PrevailingMarketRate").value =
            e.target.value * rates[0].black_market_rate)
        : (document.getElementById("PrevailingMarketRate").value =
            "Loading...");
      document.getElementById("officialDollarRate").value =
        e.target.value * 1515;
    }
    if (selected == "LB") {
      rates
        ? (document.getElementById("SayrafaDollarRate").value =
            e.target.value / rates[0].bdl_rate)
        : (document.getElementById("SayrafaDollarRate").value = "Loading...");
      rates
        ? (document.getElementById("PrevailingMarketRate").value =
            e.target.value / rates[0].black_market_rate)
        : (document.getElementById("PrevailingMarketRate").value =
            "Loading...");
      document.getElementById("officialDollarRate").value =
        e.target.value / 1515;
    }
  };

  // =================================================================================================================================

  return (
    <>
      <div
        className="container-fluid bg1"
        // style={{
        //   height: "82vh",
        //   // border: "1px solid red"
        // }}
      >
        <div
          className="row"
          style={{
            border: "1px solid transparent",
            marginTop: "80px",
          }}
        >
          <div
            className="col-md-6"
            style={{
              // border: "1px solid blue",
              padding: "5%",
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
                marginBottom: "16px",
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
              The world's banking systems weren't designed for people without
              borders. That's why we're building a new one.
            </p>
            <p
              style={{
                fontFamily: "arial",
                color: "rgb(37, 218, 197)",
              }}
            >
              1.
              <span
                style={{
                  align: "justify",
                  color: "white",
                  fontFamily: "arial",
                }}
              >
                &nbsp; Be radically transparent
              </span>
              <br /> 2.
              <span
                style={{
                  fontFamily: "arial",
                  align: "justify",
                  color: "white",
                }}
              >
                &nbsp; Charge as little as possible
              </span>
              <br />
              3.
              <span
                style={{
                  align: "justify",
                  color: "white",
                  fontFamily: "arial",
                }}
              >
                &nbsp; Make premium the new
              </span>
            </p>
          </div>
          {/* the second half of the home screen ============================================================================================ */}
          <div
            className="col-md-6"
            style={{
              // border: "1px solid yellow",
              padding: "5%",
            }}
          >
            <div style={{ marginBottom: "3%" }}>
              <label
                htmlFor="upper"
                style={{
                  // width: "100%",
                  color: "white",
                  // fontFamily: "arial",
                  fontSize: "20.25px",
                  fontWeight: "bold",
                }}
              >
                {show
                  ? "Cedar Oxygen Platform Dollar Rate"
                  : "Official Dollar Rate"}
              </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="options" id="option1" checked />{" "}
                      Buy
                    </label>
                    <label
                      class="btn btn-secondary"
                      style={{ borderRadius: "0rem" }}
                    >
                      <input type="radio" name="options" id="option2" /> Sell
                    </label>
                  </div>
                </div>
                <input
                  className="rates"
                  type="number"
                  id="main"
                  name="upper"
                  placeholder="You're exchanging"
                  onChange={handleConverter}
                  style={{ borderRadius: "0rem", width: "40%" }}
                  // value={rates ? rates[0].platform_rate : "Loading..."}
                  // style={{
                  //   width: "60%",
                  //   height: "9vh",
                  //   borderTopLeftRadius: "1.3rem",
                  //   borderBottomLeftRadius: "1.3rem",
                  //   fontFamily: "arial",
                  //   fontSize: "21.65px",
                  //   margin: "0%",
                  //   padding: "0%",
                  //   paddingLeft: "5%",
                  //   border: "none",
                  // }}
                />
                <ReactFlagsSelect
                  countries={["US", "LB"]}
                  defaultCountry="LB"
                  customLabels={{ US: "USD", LB: "LBP" }}
                  // ref="userflag"
                  onSelect={onSelectFlag}
                  // style={{ backgroundColor: "black" }}
                />
              </div>

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

              {/* {console.log("hydeeeeeeeezz",this.refs.userflag.value)} */}
            </div>
            <p
              style={{ marginLeft: "0%", marginTop: "7%", marginBottom: "3%" }}
            >
              {/* <a
                role="button"
                onClick={() => {

                  setTimeout(()=>{ setShow(!show) }, 290);
                }}
                style={{ color: "#33c7bf", paddingLeft: "5%" }}
              > */}
              {show ? (
                <label
                  style={{
                    color: "#33c7bf",
                    paddingLeft: "5%",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <i
                    className="fas fa-angle-double-down"
                    data-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  ></i>{" "}
                  Show market rates
                </label>
              ) : (
                <i
                  class="fas fa-angle-double-up"
                  data-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                ></i>
              )}
              {/* </a> */}
            </p>

            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div
                style={{
                  color: "black",
                  marginLeft: "0%",
                  marginBottom: "5%",
                }}
              >
                {/* {setShow(!show)} */}
                <label
                  htmlFor="hidden"
                  style={{
                    color: "white",
                    fontFamily: "arial",
                    fontSize: "20.25px",
                    fontWeight: "bold",
                  }}
                >
                  Sayrafa Dollar Rate
                </label>
                <br />
                <input
                  className="rates"
                  type="text"
                  id="SayrafaDollarRate"
                  readOnly
                  name="upper"
                  placeholder="You're exchanging"
                  // value={rates ? rates[0].bdl_rate : 0}
                  // style={{
                  //   borderTopLeftRadius: "1.3rem",
                  //   borderBottomLeftRadius: "1.3rem",
                  //   width: "60%",
                  //   height: "9vh",
                  //   margin: "0%",
                  //   fontFamily: "arial",
                  //   fontSize: "21.65px",
                  //   border: "none",
                  // }}
                />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect
                  countries={["US", "LB"]}
                  defaultCountry="LB"
                  customLabels={{ US: "USD", LB: "LBP" }}
                  ref={buttonRef1}
                  style={{
                    color: "black",
                    // height: "15%",
                    margin: "0%",
                  }}
                  alignOptions="right"
                />
              </div>
              <div style={{ marginLeft: "0%", marginBottom: "5%" }}>
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
                  Prevailing Market Rate
                </label>
                <br />
                <input
                  className="rates"
                  type="number"
                  id="PrevailingMarketRate"
                  readOnly
                  name="upper"
                  placeholder="You're exchanging"
                  // value={rates ? rates[0].black_market_rate : 0}
                  // style={{
                  //   borderTopLeftRadius: "1.3rem",
                  //   borderBottomLeftRadius: "1.3rem",
                  //   width: "60%",
                  //   margin: "0%",
                  //   fontFamily: "arial",
                  //   fontSize: "21.65px",
                  //   height: "9vh",
                  //   border: "none",
                  // }}
                />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect
                  countries={["US", "LB"]}
                  defaultCountry="LB"
                  ref={buttonRef2}
                  customLabels={{ US: "USD", LB: "LBP" }}
                  style={{ backgroundColor: "black" }}
                />
              </div>
              <div style={{ marginLeft: "0%", marginBottom: "5%" }}>
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
                  Official Dollar Rate
                </label>
                <br />
                <input
                  className="rates"
                  type="text"
                  id="officialDollarRate"
                  name="upper"
                  placeholder="You're exchanging"
                  // value={rates ? rates[0].black_market_rate : 0}
                  // style={{
                  //   borderTopLeftRadius: "1.3rem",
                  //   borderBottomLeftRadius: "1.3rem",
                  //   width: "60%",
                  //   margin: "0%",
                  //   fontFamily: "arial",
                  //   fontSize: "21.65px",
                  //   height: "9vh",
                  //   border: "none",
                  // }}
                />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect
                  countries={["US", "LB"]}
                  defaultCountry="LB"
                  ref={buttonRef3}
                  customLabels={{ US: "USD", LB: "LBP" }}
                  style={{ backgroundColor: "black" }}
                />
              </div>
            </div>

            <div style={{ color: "black" }}>
              <>
                <Link to={user ? "/requestpage" : "/registration"}>
                  <button
                    style={{
                      borderRadius: "0.7rem",
                      border: "none",
                      color: "white",
                      backgroundColor: "#25DAC5",
                      padding: "12px 20px",
                      margin: "15px 0",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    REQUEST RATE{" "}
                  </button>
                </Link>
                {/* <ReactFlagsSelect
                  countries={["US", "LB"]}
                  // id="userFlag"
                  defaultCountry="LB"
                  ref={buttonRef4}
                  // updateSelected={updateSelected(selected)}
                  customLabels={{ US: "USD", LB: "LBP" }}
                  style={{ backgroundColor: "black" }}
                /> */}
              </>

              {console.log("@2na honnnnn,,", buttonRef4.current)}

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
