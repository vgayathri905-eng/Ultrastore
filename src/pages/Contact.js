import React from 'react'
import "./Contact.css"
import image  from "../images/images/Capture.PNG"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div class="we"><section>
        <center>
        <h1 class="us"> Contact Us</h1>
        <h6>"Every network is made stronger by the act of reaching out."</h6></center><br/>
        <img src={image} class="well" alt="img"/>
        
</section>

<br/><br/><br/>
<section >
  

 

<div class="container era hoi">
  <div class="row">
    <div class="col p-5">
       <h1 class="lop">Stay With Us For More Information</h1><br/>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31330.238087940023!2d76.9304983791595!3d11.017624196467363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1764316677127!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col">
     <div class="lets" >
      <center><br/><br/><br/><br/>
    <h1 class="lop">How to Contact With Us</h1><br/>
 <h4 class="card-text"> Email:ultra@gmail.com</h4><br/>
  
   <h4 class="card-text"> location:Coimbatore - 641079.<br/>
Tamil Nadu, India</h4><br/>
    <h4 class="card-text"> Call:57 444 11 00 35</h4><br/>
    <h4 class="card-text"> Text:67 654 88 27 08</h4><br/>
    <a href="#" class="btn btn-secondary">Click To Visit Us</a></center>
    </div>
    </div>
  </div>
  </div>
</section>
        <br/><br/>
    </div>
  )
}

export default Contact
