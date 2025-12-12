import React from 'react'
import "./Coat.css"
import cool2 from "../constant/cool2"
import cool from "../constant/cool"
import hero from "../images/images/hero-image.jpg"

import sell1 from "../images/images/selling-products1.jpg"
import sell2 from "../images/images/selling-products2.jpg"
import sell3 from "../images/images/selling-products3.jpg"
import sell4 from "../images/images/selling-products4.jpg"

import modell from "../images/images/model.jpg"
import image  from "../images/images/images(2).png"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'

const Coat = () => {
     const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addTocart(item)) }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))}

  return (
    <div class="coat">
      
        <div class="card bg-dark text-black">
  <img src={hero} class="card-img" alt="img"/>
  <div class="card-img-overlay"><center>
    <h1 class=" col">Causal wear</h1>
   <img src={image}  class="white" alt="img"/>
    </center>
   
  </div>
</div>
<br/><br/>

<section  class="ruby">
<div class="card-group">
  {
    cool.map((s)=>(
      <div class="card rust">
   <h1 class="card-"></h1>
 
    <img src={s.img} class="card-img-top" alt="img"/>
          <div class="card-footer ">
 <center><br/>
      <h3>{s.des}</h3>
      <h4>{s.price}</h4>
      

      {
           cartitems.find(Itemofcart => Itemofcart.id === s.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(s)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(s)} > Add To Cart </button>)
        }

      {/* <button type="button" class="btn btn-dark" onClick={()=>addCart(s)}>Add to cart</button>  */}
      </center> 
      
    </div>
          
    
  </div>
    )
    )
  }
 
  
</div><br/>
      </section>

      <br/><br/>


<section>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      
      <img src={modell} class=" ji img-fluid rounded-start" alt="img"/>
    </div>
    <div class="col-md-8 rust">
      <div class="card-body "><center>
        <h1 class="  rcard-title">customized </h1></center>
       
 <p class="par">Tailored dresses, suits, and blazers can be worn for work or formal events and
 It is a popular choice for parties, ans and t-shirts are perfect for everyday wear.
Tailored dresses, suits, and blazers can be worn for work or formal events and
 It is a popular choice for parties, weweddings, festivals, and other social gatherings. </p>
 
      
      </div>
    </div>
  </div>
</div><br/><br/>
     </section>


      <section class="rust">
        <div class="card-group ">
          {
    cool2.map((q)=>(
     <div class="card-rust">
    <br/>
    <img src={q.img} class=" inu card-img-top" alt="img"/>
    <div class="card-body">
  <center>
     <h3> {q.des}</h3>
     <h5>{q.price}</h5>
     {
           cartitems.find(Itemofcart => Itemofcart.id === q.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(q)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(q)} > Add To Cart </button>)
        }
       {/* <button type="button" class="btn btn-dark">Add to cart</button> */}
        </center>
    </div>
  </div>
    )
    )
  }
  
  
  
  </div>
      </section><br/><br/>
      </div>

      
  )
}
 
       


export default Coat

   

 

