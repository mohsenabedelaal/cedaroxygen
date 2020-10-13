import React from 'react'
// import "../componentscss/Home2.css"

const Home3 = () => {
    return (
        <div style={{ backgroundImage: "url(https://cedaroxygen.com/wp-content/uploads/2020/07/Cedar-Oxygen_Baalbeck2-scaled.jpg)", backgroundPosition: "center", backgroundSize: "cover", color: "white",height:"39rem"}}>
            <h1 style={{ fontSize:"36",paddingLeft:"25rem",paddingTop:"5rem" ,fontWeight:"bold",paddingBottom:"1rem"}}>Why to Trade With CEDAR OXYGEN?</h1>
            <p style={{ fontSize:"24",paddingLeft:"35rem",fontWeight:"bold",paddingBottom:"4rem"}}>Simple and transparent access to currency.</p>
            <div class="container" >
                <div class="row">
                    <div class="col-sm">
                    <i class="fas fa-mobile-alt" style={{fontSize:"48px",marginLeft:"9rem",color:"#25DAC5",marginBottom:"1rem"}}></i>
                    <p style={{ fontSize:"18",marginLeft:"4rem" }}>Fast and Secure Platform</p>
                    <hr style={{width:"7rem",background:"red",marginLeft:"6rem" ,height:"2px",marginBottom:"1rem"}}/>
                    <p style={{ marginLeft:"1rem" }}>Transactions performed on our platform <br/></p>
                    <p style={{ marginLeft:"4.5rem" }}>are all fast and secure</p>
                    </div>
                    <div class="col-sm">
                    <i class="fas fa-chart-pie" style={{fontSize:"48px",marginLeft:"8rem",color:"#25DAC5",marginBottom:"1rem"}}></i>
                    <p style={{ fontSize:"18",marginLeft:"5rem" }}>Easy and Effortless</p>
                    <hr style={{width:"7rem",background:"red",marginLeft:"6rem" ,height:"2px",marginBottom:"1rem"}}/>
                    <p style={{ marginLeft:"0.87rem" }}>Cedar Oxygen's intuitive interface makes <br/></p>
                    <p style={{ marginLeft:"4.3rem" }}>trading easier for everyone.</p>
                    </div>

                    <div class="col-sm">
                    <i class="fas fa-comments" style={{fontSize:"48px",marginLeft:"8rem",color:"#25DAC5",marginBottom:"1rem"}}></i>
                    <p style={{ fontSize:"18",marginLeft:"5rem" }}>Excellent Support</p>
                    <hr style={{width:"7rem",background:"red",marginLeft:"6rem" ,height:"2px",marginBottom:"1rem"}}/>
                    <p style={{ marginLeft:"0.87rem" }}>Cedar Oxygen's excellent support team </p>
                    <p style={{ marginLeft:"2rem" }}>is available to help you, 5 days/week.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home3;