import React from 'react'
import "./Home.css"
import img1 from "../images/images/banner1.jpg"
import img2 from "../images/images/banner2.jpg" 
import img4 from "../images/images/collection-item1.jpg"  
import img5 from "../images/images/collection-item2.jpg"
import img6 from "../images/images/collection-item3.jpg" 
  

 
import img19 from "../images/images/quotation.png"
import img20 from "../images/images/model.jpg"
import img21 from "../images/images/post-img1.jpg"  
import img22 from "../images/images/post-img2.jpg"
import img23 from "../images/images/post-img3.jpg" 
import img24 from "../images/images/brand1.png"
import img25 from "../images/images/brand2.png"
import img26 from "../images/images/brand3.png"
import img27 from "../images/images/brand4.png"
import img28 from "../images/images/brand5.png"  
import { Link } from 'react-router-dom'
import homely from "../constant/homely"
import homely2 from "../constant/homely2"
import homely3 from "../constant/homely3"
import homely4 from "../constant/homely4"
import { useSelector,useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'

    const Home = () => {
     const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch();


    const addCart = (item) => {
        dispatch(addTocart(item)) }


    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))}

  return (

    <div >
 <section >
    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt="img"/>
          <div class="card-img-overlay">
            <h5 class="card-title p-5 w-25">summer collection</h5>
            <p class="card-text p-5 w-50"> Summer collection is a curated lineup of seasonal apparel for hot weather, reflecting upcoming trends in materials, colors, and silhouettes. </p>
            <button type="button" class=" btn1 btn btn-outline-secondary">shop it now <i
                class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img2} class="img-thumbnail d-block w-100" alt="img"/>
          <div class="card-img-overlay">
            <h5 class="card-title p-5 w-25">casual collection</h5>
            <p class="card-text p-5 w-50">These collections focus on ease, style, and practicality, often featuring various fits and colors for men, women, and kids. </p>
            <button type="button" class="btn2-secondary btn-secondary btn-outline-light">shop it now <i
                class="fa-solid fa-arrow-right"></i></button>

          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
<br/><br/>


  <section  class="view war">
    <a class="zzz" href="#">view  product &rarr;</a>
    <h2 class="zz">featured product</h2>
    <div class="row index">
      {
        homely.map((w)=>(
<div class="col-12 col-lg-3 qwz" key={w.id}>
        <img src={w.img} alt="img" class="img-thumbnail"/><center>
        <h5>{w.des}</h5>
        <h5>{w.price}</h5>
        {
           cartitems.find(Itemcart => Itemcart.id === w.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(w)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(w)} > Add To Cart </button>)
        }
       {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
       </center>
      </div>
        )
        )
      }
      
    </div>
  </section>

<br/><br/>
  <section>
    <div class="street carousel-inner ">
      <div class="carousel-item active h-25">
        <img src={img4} class="d-block rounded m-3 poop" alt="img"/>
        <div class="card-img-overlay">
          <h6 class="wear m-5 p-1 " >Causal Collction </h6>
          <h5 class="card-title1 m-5  w-50" >Street
            Wear</h5>
          <p class="card-text1">Dressed to impress one thread at time. <br></br>Casual with a touch of street you own like <br></br> Streetwear vibes only like own the street.
          </p>
          <button type="button" class="btn7 btn btn-none-outline-secondary shops" 
          >Shop Collection &rarr;</button>
        </div>
      </div>

      
      
      <div class="hat carousel-inner">
        <div class="carousel-item active sun">
          <img src={img5} class="d-block w-50 itel" alt="img"/>
          <div class="card-img-overlay">
            <h6  class="pen">Basic Collection </h6>
            <h5 class="hat1 card-title3 p-5 w-25"
              >Basic Shoe</h5>
            <button type="button" class="btn9 btn btn-none-outline-secondary wols" >Shop Collection &rarr;</button>
          </div>
        </div>
      </div>
    <br/>
      <div class="hat carousel-inner">
        <div class="carousel-item active sun">
          <img src={img6} class="d-block w-50 itel" alt="img"/>
          <div class="card-img-overlay">
            <h6  class="pen">Best Selling Product</h6>
            <h5 class="hat1 card-title3 p-5 w-25"
              >Wollen Hat</h5>
            <button type="button" class="btn9 btn btn-none-outline-secondary wols" >Shop Collection &rarr;</button>
          </div>
        </div>
      </div>
      </div>
  </section>

  <section>
    <div class=" moon m-5 p-5  war">
      <h3 class="aa" >Get 25% off discount coupons</h3>
      <p class=" star p-3" >Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consequuntur, quisquam.</p>
      <form class="abc d-flex">
        <input class="form-control  btn-lg  " type="search" placeholder="Enter you email here" aria-label="Search"/>
        <button class="btn btn-dark btn-lg  " type="submit">subscribe now</button>
      </form>
    </div>
  </section>

  <section>
    <div class="index11 ">
      <h1 class="kite" >Best selling product</h1>
      <div class="uu">
        <a class="uu" href="https://www.flaticon.com/">All</a>
        <a class="uu" href="https://www.flaticon.com/">Shoe</a>
        <a class="uu" href="https://www.flaticon.com/">Tshirt</a>
        <a class="uu" href="https://www.flaticon.com/">Pants</a>
        <a class="uu" href="https://www.flaticon.com/">Hoodie</a>
        <a class="uu" href="https://www.flaticon.com/">Outer</a>
        <a class="uu" href="https://www.flaticon.com/">Jacket</a>
        <a class="uu" href="https://www.flaticon.com/">Accessories</a>
      </div>
    </div>
  </section><br/>
  <section  class="view war">
    <a class="zzz" ></a><br/>
    <div class="row index">
      {
         homely2.map((z)=>(
       <div class="col-12 col-lg-3 qwz" key={z.id}>
        <img src={z.img} alt="img" class="img-thumbnail"/>
        <button type="button" class="btn3 btn btn-none-outline-secondary">
          </button><center>
        <h5>{z.des}</h5>
        <h5>{z.price}</h5>
        {
           cartitems.find(Itemcart => Itemcart.id === z.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(z)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(z)} > Add To Cart </button>)
        }
         {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
         </center>
      </div>
         )
        )
      }
    </div>
  </section>

 <br/><br/>

  <section>
    <div class="index1 war ">
      <div class="qw1">
      
    <div class="row index">

      { 
        homely3.map((m)=>(
          
      
       <div class="col-12 col-lg-3 qwe1" key={m.id}><br/><br/><br/><br/><br/><br/>
        <img src={m.img} alt="img" class="img-thumbnail" width="90%" height="70%" />
       <center>
        <h5>{m.des}</h5>
        <h5>{m.price}</h5>
        {
           cartitems.find(Itemcart => Itemcart.id === m.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(m)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(m)} > Add To Cart </button>)
        }
         {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
         </center>
      </div>

        )
      )
      }
        
      </div>
      </div>
    </div>
  </section>

  <br/><br/> <br/><br/>
  <section >
    <div class="index2 war">

      {
        homely4.map((n)=>(
          <div class=" col-12 col-lg-3 qw2"  key={n.id}><br/>
        <img src={n.img} alt="img" class="img-thumbnail" width="90%" height="70%"/>
        <center>
        <h5>{n.des}</h5>
        <h5>{n.price}</h5>
        {
           cartitems.find(Itemcart => Itemcart.id === n.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(n)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(n)} > Add To Cart </button>)
        }
         {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
         </center>
      </div>

        )
            )
      }

     S
    </div>
  </section>
  <br/><br/><br/><br/><br/><br/> <br/><br/>
  <section>
    <div>
      <img src={img19} alt="img"  class="quot"/>
      <p  class="quot-text">" Campaign that reframes greatness as a choice, not an outcome. It puts 'Just Do It' into the hands of today's generation"</p>
      <h5  class="rio">By Wieden </h5>
      <i  class="fa-solid fa-arrow-left arrowl"></i>
      <i  class="fa-solid fa-arrow-right arrowr"></i>
    </div>
  </section>

  <section class=" demin container rest"> 
    <img  class="rest" src={img20} alt="img"/>
    <div class="demoo">
      <h5>DENIM COLLECTION</h5>
      <h2  class="selection">The Causal Selection</h2>
      <p class="lorems">"Clothes aren't going to change the world, but the men who wear them will.I slay every day, and I dress up well for it."</p>
      <p>shop collection &rarr;</p>
    </div>

  </section>
  <br/><br/><br/><br/><br/><br/><br/>
  <section>
    <div class="quote ">
      <h4  class="day"> Quote of the Day</h4><br/><br/>
      <p class="par" >"It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes."</p>
      <p  class="para">- Dr.Seuss</p><br/>
    </div>
  </section>
  <br/><br/><br/><br/>

   
   

   
   </div>
   
  )
}
export default Home