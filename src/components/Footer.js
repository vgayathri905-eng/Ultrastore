import React from 'react'
 import "./Footer.css"
 import img29 from "../images/images/visa-icon.jpg" 
 import img30 from "../images/images/mastercard.png" 
 import img31 from "../images/images/american-express.jpg"
 import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      
    <div class="foots">
      <br/>  <br/>  <br/>
          <section >
            <div class="car">
  <div class="card-body">
    <h1 class="alt">Ultras</h1>
   <Link   class="line" >About us</Link>
    <Link  to="#" class="line">Condition </Link>
    <Link to="#" class="line">Journal</Link>
    <Link to="#" class="line">Career</Link>
     <Link to="#" class="line">Ultras Press</Link>
    <Link to="#" class="line">Affiliate Programme </Link>
  </div>
  <div class="card-body">
    <h1 class="serv"> Service</h1>
   <Link to="#" class="line">FAQ</Link>
    <Link to="#" class="line">Contact</Link>
    <Link to="#" class="line">Privacy Policy</Link>
    <Link to="#" class="line">Returns & Refunds</Link>
     <Link to="#" class="line">Cookie Guidelines</Link>
  </div>
  <div class=" cont card-body">
    <h1>Contact</h1>
    <p class="integer">Do you have any questions or suggestions? ourservices@ultras.com</p>
        <p class="integer">Do you need assistance? Give us a call.
          +57 444 11 00 35</p>
  </div>

  <div class=" conta card-body">
    <h1 >Forever </h1>
    <p class=" integer">They help us to be seen in the light that we wish to be, and also exude our personalities and social status.</p>
  </div>
</div>
   

      
      <div class="iii"> 
        
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-square-behance"></i>
      </div>
   

  </section>


<br/><br/>
  <section class="foots">
    <div class="vbn">
      <hr/>     

      <h4 class="ty" >Freebies by Templates Jungle</h4>
      <div class="mnb">
          <h5  class="pay">Payment options  :</h5>
        <div class="mnbb">
        
          <img src={img29} alt="img"/>
          <img src={img30} alt="img"/>
          <img src={img31} alt="img"/>
        </div>
      </div>
         <hr/>
    </div>
  </section>
    </div>
    
  )

}

export default Footer
