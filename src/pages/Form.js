import React from 'react'
import "./Form.css"
import modern from '../constant/modern'
import modern1 from '../constant/modern1'
import video from "../images/images/video-image.jpg"
import video1 from "../images/images/banner1.jpg"
import video2 from "../images/images/banner2.jpg"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'

const Form = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);
      const dispatch = useDispatch();
  
      const addCart = (item) => {
          dispatch(addTocart(item)) }
  
      const deleteCart = (item) => {
          dispatch(deleteFromCart(item))}
  return (
    <div class="form">
   <center> <h1 class="m"> Modern</h1>
    <h5 class="m">"Not just a look, it's a lifestyle."</h5></center>
        <section >
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

      
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={video} class="d-block w-100" alt="img"/>
      <div class=" sun carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={video1} class="d-block w-100" alt="img"/>
      <div class=" sun carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={video2} class="d-block w-100" alt="img"/>
      <div class=" sun carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section> <br/><br/> 

<section class="plan">
   <div class="card-group">
    {
        modern.map((e)=>(
          <div class="card over">
        <h5 class="card-title"></h5><br/>
       <img src={e.img} class="card img-top" alt="img"/>
       <div class="card-body"><center>
    <h4>{e.des}</h4>
         <h4>{e.price}</h4>
          {
           cartitems.find(Itemofcart => Itemofcart.id === e.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(e)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(e)} > Add To Cart </button>)
        }
         {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
         </center>
       </div>
     </div>
        )
        )
      }
     

   </div> 
</section>

<br/><br/><br/>   

<section class="plan">
   <div class="card-group">
{
    modern1.map((f)=>
       <div class="card over">
       <h5 class="card-title"> </h5><br/><br/>
       <img src={f.img} class="card-img-top" alt="img"/>
       <div class="card-body"><center>
          <h4>{f.des}</h4>
         <h4>{f.price}</h4>
          {
           cartitems.find(Itemofcart => Itemofcart.id === f.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(f)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(f)} > Add To Cart </button>)
        }
         {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
         </center>
       </div>
       
     </div>
    )
    }
    
     
   </div> 
</section>

 <br/><br/>

    </div>



  )
}

export default Form