import React from 'react'
import { Link } from 'react-router-dom'
import '../componentscss/Navbarn.css'
import { HashLink } from 'react-router-hash-link';

const Navbarn = ({user,handleLogout}) => {
    return (
        <div>
{/* <nav className="navbar sticky-top navbar-expand-lg " style={{ backgroundColor: "#005454" }}>
  <Link to="/"><img src="https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo.png" className="navbar-brand ml-2"
    width="200" height="50" alt="icon" style={{marginRight:"56rem"}}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">



    <Link to="/" className="nav-link active" style={{ padding:".5rem 0.65rem",textDecoration:"none" ,color:"white" }}>Home</Link>
    <Link to="/requestpage" className="nav-link disabled" style={{ padding:".5rem 0.65rem", }}>Request</Link>
    <Link to="/requestpage" className="nav-link" style={{ padding:".5rem 0.65rem",textDecoration:"none" ,color:"white" }}>Log in</Link>
    <button className="btn " style={{ color:"#25DAC5",borderColor:"#25DAC5",border:"1px solid #25DAC5",borderRadius:"2rem" }}>Register</button>


  </div>
</nav> */}
<nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3 " style={{ backgroundColor: "#005454" }}>
<Link to="/"><img src="https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo.png" className="navbar-brand ml-2"
    width="200" height="50" alt="icon"/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">

    <ul class="navbar-nav ml-auto">
      <li class="nav-item mr-2">
      <Link to="/" className="nav-link active" >Home</Link>
      </li>
      <li class="nav-item mr-2">
      {user ? <Link className="nav-link active" to="/requestpage">Requests</Link> :
      <Link className="nav-link disabled" to="/requestpage">Requests</Link>}
      {/* <Link to="/requestpage" className="nav-link disabled">Request</Link> */}
      </li>
      {!user ? 
      <li class="nav-item mr-2">
      <Link to="/login" className="nav-link active">Log in</Link>
      </li> : <div className="nav-link disabled">Welcome, {user}</div> }
      <li class="nav-item mr-2">
      
      {/* <HashLink smooth to="/#register">
        <button className="btn btn-sm mt-1" style={{ color:"#25DAC5",borderColor:"#25DAC5",border:"1px solid #25DAC5",borderRadius:"2rem" }}>Register</button>
        </HashLink> */}
        {user ? <><a class="nav-link dropdown-toggle mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" style={{color:"white"}}></i><span class="caret"></span>
          </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div></> :
            <>
            <HashLink smooth to="/#register">
        <button className="btn btn-sm mt-1" style={{ color:"#25DAC5",borderColor:"#25DAC5",border:"1px solid #25DAC5",borderRadius:"2rem" }}>Register</button>
        </HashLink>
              
            </>}
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbarn
