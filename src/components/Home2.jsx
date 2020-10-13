import React, { useState,useEffect } from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import '../componentscss/Home2.css';
import ReactFlagsSelect from "react-flags-select";
import 'react-flags-select/css/react-flags-select.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Home2 = () => {
    const [show, setShow] = useState(true)
    const [rates, setRates] = useState('')

    useEffect(() => {

        axios.get("/rates/listall")
          .then(res => {
            console.log(res.data);
            setRates(res.data);
          }).catch(err => console.log(err))
      }, [])


    return (
        <>

            {/* <div className="row " style={{ color:"white"}} >
                    <div class="col ml-5">
                        <h1>Cedar Oxygen is</h1>
                        <h1>committed to Lebanon</h1>
                        <h1>and its industry</h1>
                        <h4>Join us to get the best exchange rate</h4>
                        <h4>The world's banking systems weren'tdesigned for people without borders. <br/>That's why we're building a new one.</h4>
                        <ol>
                            <li>Be radically transparent</li>
                            <li>Charge as little as possible</li>
                            <li>Make premium the new</li>
                        </ol>
                    </div>
                    <div class="col">
                         2 of 2
                    </div>
                </div>
                <div className="row" style={{ backgroundColor:"yellow" }}>
                    <div class="col ml-1">
                        1 of 2
                    </div>
                    <div class="col">
                         2 of 2
                    </div>
                </div> */}
            {/* <div className="row home-bg" >
                    <div class="col ml-1">
                        1 of 2
                    </div>
                    <div class="col">
                         2 of 2
                    </div>
                </div> */}


            <div class="container-fluid" style={{ backgroundImage: "url(https://cedaroxygen.com/wp-content/uploads/2020/07/Cedar-Oxygen_Cedar-scaled.jpg)", backgroundPosition: "center", backgroundSize: "cover", color: "white" ,height:"45rem"}}>
                <div class="row">
                    <div class="col-5 ml-5" style={{ marginTop:"9rem" }} >
                        <h1 style={{ fontSize:"3rem",fontWeight: "bold", align: "justify" }}>Cedar Oxygen is <br />committed to Lebanon<br />and its industry</h1>
                        <h4 style={{ fontWeight: "bold", align: "justify" }}>Join us to get the best exchange rate</h4>
                        <p style={{ fontWeight: "bold", align: "justify" }}>The world's banking systems weren'tdesigned for people without borders. <br />That's why we're building a new one.</p>
                        <ol style={{ align: "justify" }}>
                            <li style={{ align: "justify", color: "rgb(37, 218, 197)" }}><span style={{ align: "justify", color: "white" }}>Be radically transparent</span></li>
                            <li style={{ align: "justify", color: "rgb(37, 218, 197)" }}><span style={{ align: "justify", color: "white" }}>Charge as little as possible</span></li>
                            <li style={{ align: "justify", color: "rgb(37, 218, 197)" }}><span style={{ align: "justify", color: "white" }}>Make premium the new</span></li>
                        </ol>
                    </div>
                    <div class="col-6" style={{ marginTop:"9.5rem" }}>
                        <div style={{ color: "black", marginLeft: "45%" }}>
                            <label htmlFor="upper" style={{ color: "white" }}>{show ? "Cedar Oxygen Platform Dollar Rate" : "Official Dollar Rate"}</label><br />
                            <input type="text" id="upper" name="upper" placeholder="You're exchanging" value={rates ? rates[0].platform_rate + " LBP" : 0 + "LBP"}
                            style={{
                                borderTopLeftRadius: "2rem",
                                borderBottomLeftRadius: "2rem"
                            }} />
                            {/* <ReactFlagsSelect defaultCountry="US"/> */}
                            <ReactFlagsSelect countries={["US", "LB"]}
                                defaultCountry="US"
                                customLabels={{ "US": "USD", "LB": "LBP" }} />
                        </div>
                        <p style={{ marginLeft: "65%" }}>
                            <a role="button" onClick={() => setShow(!show)}><i class="fas fa-angle-double-down" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">

                            </i></a>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">

                                    <div style={{ color: "black", marginLeft: "45%", marginBottom: "5%" }}>
                                        <label htmlFor="hidden" style={{ color: "white" }}>Lebanese Dollar Rate</label><br />
                                        <input type="text" id="hidden" name="upper" placeholder="You're exchanging" value={rates ? rates[0].bdl_rate + " LBP" : 0 + "LBP"}
                                        style={{
                                            borderTopLeftRadius: "2rem",
                                            borderBottomLeftRadius: "2rem"
                                        }} />
                                        {/* <ReactFlagsSelect defaultCountry="US"/> */}
                                        <ReactFlagsSelect countries={["US", "LB"]}
                                            defaultCountry="US"
                                            customLabels={{ "US": "USD", "LB": "LBP" }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ color: "black", marginLeft: "45%" }}>
                            {show ?
                                <>

                            <HashLink smooth to="/#register"><button style={{
                                        color: "white", backgroundColor: "#25DAC5",fontWeight:"bold",
                                        border: "none", borderBottomLeftRadius: "2rem", borderTopLeftRadius: "2rem", lineHeight: "3rem", width: "60%"
                                    }}>REGISTER HERE TODAY > </button></HashLink>
                                    <ReactFlagsSelect countries={["US", "LB"]}
                                        defaultCountry="US"
                                        customLabels={{ "US": "USD", "LB": "LBP" }} />
                                </> :
                                <>
                                    {/* <input type="number" role="button" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} >Register</input> */}
                                    <label htmlFor="lower" style={{ color: "white" }}>Black Market Rate</label><br />
                                    <input type="text" id="lower" name="upper" placeholder="You're exchanging" value={rates ? rates[0].black_market_rate + " LBP" : 0 + "LBP"}
                                    style={{
                                        borderTopLeftRadius: "2rem",
                                        borderBottomLeftRadius: "2rem"
                                    }} />
                                    {/* <ReactFlagsSelect defaultCountry="US"/> */}
                                    <ReactFlagsSelect countries={["US", "LB"]}
                                        defaultCountry="US"
                                        customLabels={{ "US": "USD", "LB": "LBP" }} />
                                </>
                            }
                            {/* <label htmlFor="lower" style={{ color:"white" }}>Black Market Rate</label><br/>
                <input type="number" id="lower" name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />

                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} /> */}
                        </div>




                    </div>


                </div>
            </div>



        </>
    )
}

export default Home2
