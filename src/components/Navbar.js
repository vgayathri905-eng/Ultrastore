import React from 'react'
import "./Navbar.css"

 import down from "../images/images/download (1).jfif"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const Logout=()=>{
      localStorage.removeItem("token")
      window.location.href="/login"
  }
  return (  
    <div class="navi">
      <section><hr/>
      <h2 class="ship">Welcome to Ultras Casual Wear Store!</h2>
          <hr/>
      </section>
         <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand"href="#" >
            <h1 class="store"> </h1>
          </a>
           <Link class="ethnic" to="/home"> <img  src={down}  alt="img"/></Link>
            <div class="nav menu ok">
             <Link  class="style" to="/about">ABOUT</Link>
            <Link class="western " to="/coat" >CAUSAL</Link>
            <Link  class="cas" to="/women">STYLISH</Link>
            <Link  class="street"  to="/girl">FASHION</Link>
             <Link  class="style" to="/form">MODERN</Link>
            <Link  class="hoodie"  to="/contact">CONTACT</Link>
             <Link  class="cart" to="/cart">CART</Link>
             <Link class="upload" to="/upload">UPLOAD</Link>
             <Link class="register" to="/register">REG</Link>
             <Link class="login" to="/login">LOGIN </Link>
             {/* <div class="login" onClick={Logout}>LGOUT</div> */}
              <Link class="formvalidate" to="/formvalidate">FORM</Link>
            </div>
        </div>
      </div>
     </nav>
          <center>
      <h5>{props.hi}</h5>
     </center>
        <br/>
    </div>
  )
}
export default Navbar