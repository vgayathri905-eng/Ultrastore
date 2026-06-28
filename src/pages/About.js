import React from 'react'
import "./About.css"
import image1  from "../images/images/about"
import image2  from "../images/images/white.jfif"
import image3  from "../images/images/logo.jfif"
import image4  from "../images/images/logo1.jfif"
import image5  from "../images/images/logo3.jfif"
import image6  from "../images/images/logo3.png"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div class="you" >
        
        <center>
                <h1  class="all"> ABOUT US</h1>
                <h5  class="all">"Elegance is the only beauty that never fades."</h5></center><br/><br/>
              
                
                <div class="card mb-3">

  <div class="row g-0 clr">
    <div class="col-md-4 p-5">
      <img src={image1} class=" about " alt="img"/>
    </div>
    <div class="col -md-8">
      <div class="card-body clr p-5"><center>
        <h1 class="card-">WHO WE ARE</h1>
        <h5 class="card-text">"Elegance is the only beauty that never fades."</h5></center><br/>
         <p class="all"> Johanna Innsbruck and Linda Copperfield have always dreamed of comfortable women's clothing that would look appropriate in any circumstances.

This is how the Ultras Causal appeared – it is a brand for women who like to feel confident, seductive & stylish in any situation. We use only natural fabrics & pay great attention to details that make  difference
Illustration."I have always had difficulties with buying clothes for every-day wear. Therefore, together with Linda, we decided to create our own brand."</p>
     <center> <button type="button" class="btn btn-secondary">Follow Us On Instagram</button><br/><br/>
     <button type="button" class="btn btn-secondary">Follow Us On Facebook</button></center>
      </div>
    </div><br/><br/>
  </div>
<br/><br/>
  <section class="clr">
      <div class="container p-5">
  <div class="row row-cols-4 ">
    <div  class="col"><h1>New Arrival</h1><br/><br/><div> <img src={image3}  alt="img"/> </div> <h1></h1></div>
    <div class="col"><h1>99+ Customer</h1><br/><br/> <div> <img src={image4}  alt="img"/> </div></div>
    <div class="col"><h1>Unique Wear </h1><br/><br/><div> <img src={image5}  alt="img"/> </div></div>
    <div class="col"><h1>Stylish Wear </h1><br/><br/>
      <div> <img src={image6}  alt="img"/> </div></div>
  </div>
</div><br/><br/>
</section>
 
  </div> <br/><br/><br/><br/><section><div> <img src={image2}  alt="img"/>
</div></section>
 
    
     
                <br/><br/><br/><br/>
               
    </div>
  )
}

export default About