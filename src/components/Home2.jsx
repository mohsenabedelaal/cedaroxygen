import React, { useState } from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import '../componentscss/Home2.css';
import ReactFlagsSelect from "react-flags-select";
import 'react-flags-select/css/react-flags-select.css'

const Home2 = () => {
    const [show,setShow] = useState(true)
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


<div class="container-fluid" style={{ backgroundImage:"url(https://cedaroxygen.com/wp-content/uploads/2020/07/Cedar-Oxygen_Cedar-scaled.jpg)",backgroundPosition:"center",backgroundSize:"cover",color:"white" }}>
  <div class="row">
    <div class="col-5 ml-5 mt-4" >
    <h1>Cedar Oxygen is <br/>committed to Lebanon<br/>and its industry</h1>
    <h4>Join us to get the best exchange rate</h4>
    <p>The world's banking systems weren'tdesigned for people without borders. <br/>That's why we're building a new one.</p>
    <ol>
        <li>Be radically transparent</li>
        <li>Charge as little as possible</li>
        <li>Make premium the new</li>
    </ol>
    </div>
    <div class="col-6 mt-4">
                <div style={{ color: "black" ,marginLeft:"45%",marginBottom:"3%"}}>
                <label htmlFor="upper" style={{ color:"white" }}>Cedar Oxygen Platform Dollar Rate</label><br/>
                <input type="number" id="upper"  name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} />
                </div>
                <p style={{ marginLeft:"70%" }}>
                <a role="button" onClick={()=>setShow(!show)}><i class="fas fa-angle-double-down" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">

                </i></a>
                </p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">

    <div style={{ color: "black" ,marginLeft:"45%",marginBottom:"5%"}}>
                <label htmlFor="hidden" style={{ color:"white" }}>Official Dollar Rate</label><br/>
                <input type="number" id="hidden"  name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} />
                </div>

      </div>
    </div>
  </div>
                <div style={{ color: "black" ,marginLeft:"45%"}}>
                { show ?
                <>
                <label htmlFor="lower" style={{ color:"white" }}>Black Market Rate</label><br/>
                <input type="number" id="lower" name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />
                {/* <ReactFlagsSelect defaultCountry="US"/> */}
                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} />
                 </> :
                 <>
                 {/* <input type="number" role="button" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} >Register</input> */}
                <button style={{ color:"white" , backgroundColor:"#25DAC5",
                border:"none",borderBottomLeftRadius:"2rem",borderTopLeftRadius:"2rem",height:"3rem" ,width:"62%"}}>REGISTER HERE TODAY > </button>
                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} />
                 </>
                }
                {/* <label htmlFor="lower" style={{ color:"white" }}>Black Market Rate</label><br/>
                <input type="number" id="lower" name="upper" placeholder="amount" style={{ borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem"}} />

                <ReactFlagsSelect  countries={["US", "LB"]}
                defaultCountry="US"
                 customLabels={{"US": "USD","LB": "LBP"}} /> */}
                </div>

            {show ? <button >Hello</button> :<></> }


</div>

        </div>
  </div>


        </>
    )
}

export default Home2
