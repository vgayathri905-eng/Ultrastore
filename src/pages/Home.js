import React from 'react'
import "./Home.css"
import img1 from "../images/images/banner1.jpg"
import img2 from "../images/images/banner2.jpg" 
import img4 from "../images/images/collection-item1.jpg"  
import img5 from "../images/images/collection-item2.jpg"
import img6 from "../images/images/collection-item3.jpg" 
  
import img19 from "../images/images/quotation.png"
import img20 from "../images/images/model.jpg"

import homely from "../constant/homely"
import homely2 from "../constant/homely2"
import homely3 from "../constant/homely3"
import homely4 from "../constant/homely4"
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'

const Home = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addTocart(item)) 
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
  }

  return (
    <div>
      <section>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="Summer collection banner"/>
              <div className="card-img-overlay">
                <h5 className="card-title p-5 w-25">summer collection</h5>
                <p className="card-text p-5 w-50"> Summer collection is a curated lineup of seasonal apparel for hot weather, reflecting upcoming trends in materials, colors, and silhouettes. </p>
                <button type="button" className="btn1 btn btn-outline-secondary">shop it now <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="img-thumbnail d-block w-100" alt="Casual collection banner"/>
              <div className="card-img-overlay">
                <h5 className="card-title p-5 w-25">casual collection</h5>
                <p className="card-text p-5 w-50">These collections focus on ease, style, and practicality, often featuring various fits and colors for men, women, and kids. </p>
                <button type="button" className="btn2-secondary btn-secondary btn-outline-light">shop it now <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <br/><br/>

      <section className="view war">
        {/* FIX 1: Changed from <a> to <button> for accessibility */}
        <button className="zzz btn-link-style" type="button">view product &rarr;</button>
        <h2 className="zz">featured product</h2>
        <div className="row index">
          {homely.map((w) => (
            <div className="col-12 col-lg-3 qwz" key={w.id}>
              <img src={w.img} alt={w.des} className="img-thumbnail"/>
              <center>
                <h5>{w.des}</h5>
                <h5>{w.price}</h5>
                {cartitems.find(Itemcart => Itemcart.id === w.id) ? (
                  <button className="btn btn-secondary" onClick={() => deleteCart(w)}> Delete From Cart </button>
                ) : (
                  <button className="btn btn-dark" onClick={() => addCart(w)}> Add To Cart </button>
                )}
              </center>
            </div>
          ))}
        </div>
      </section>

      <br/><br/>
      <section>
        <div className="street carousel-inner">
          <div className="carousel-item active h-25">
            <img src={img4} className="d-block rounded m-3 poop" alt="Street wear collection style"/>
            <div className="card-img-overlay">
              <h6 className="wear m-5 p-1">Causal Collection</h6>
              <h5 className="card-title1 m-5 w-50">Street Wear</h5>
              <p className="card-text1">Dressed to impress one thread at time. <br/>Casual with a touch of street you own like <br/> Streetwear vibes only like own the street.</p>
              <button type="button" className="btn7 btn btn-none-outline-secondary shops">Shop Collection &rarr;</button>
            </div>
          </div>

          <div className="hat carousel-inner">
            <div className="carousel-item active sun">
              <img src={img5} className="d-block w-50 itel" alt="Basic shoe presentation"/>
              <div className="card-img-overlay">
                <h6 className="pen">Basic Collection</h6>
                <h5 className="hat1 card-title3 p-5 w-25">Basic Shoe</h5>
                <button type="button" className="btn9 btn btn-none-outline-secondary wols">Shop Collection &rarr;</button>
              </div>
            </div>
          </div>
          <br/>
          <div className="hat carousel-inner">
            <div className="carousel-item active sun">
              <img src={img6} className="d-block w-50 itel" alt="Woolen hat presentation"/>
              <div className="card-img-overlay">
                <h6 className="pen">Best Selling Product</h6>
                <h5 className="hat1 card-title3 p-5 w-25">Wollen Hat</h5>
                <button type="button" className="btn9 btn btn-none-outline-secondary wols">Shop Collection &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="moon m-5 p-5 war">
          <h3 className="aa">Get 25% off discount coupons</h3>
          <p className="star p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quisquam.</p>
          <form className="abc d-flex" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control btn-lg" type="search" placeholder="Enter your email here" aria-label="Search"/>
            <button className="btn btn-dark btn-lg" type="submit">subscribe now</button>
          </form>
        </div>
      </section>

      <section>
        <div className="index11">
          <h1 className="kite">Best selling product</h1>
          <div className="uu">
            <a className="uu" href="https://www.flaticon.com/">All</a>
            <a className="uu" href="https://www.flaticon.com/">Shoe</a>
            <a className="uu" href="https://www.flaticon.com/">Tshirt</a>
            <a className="uu" href="https://www.flaticon.com/">Pants</a>
            <a className="uu" href="https://www.flaticon.com/">Hoodie</a>
            <a className="uu" href="https://www.flaticon.com/">Outer</a>
            <a className="uu" href="https://www.flaticon.com/">Jacket</a>
            <a className="uu" href="https://www.flaticon.com/">Accessories</a>
          </div>
        </div>
      </section>
      <br/>
      
      <section className="view war">
        {/* FIX 2: Removed the completely empty, non-functional <a> tag from here */}
        <br/>
        <div className="row index">
          {homely2.map((z) => (
            <div className="col-12 col-lg-3 qwz" key={z.id}>
              <img src={z.img} alt={z.des} className="img-thumbnail"/>
              <button type="button" className="btn3 btn btn-none-outline-secondary"></button>
              <center>
                <h5>{z.des}</h5>
                <h5>{z.price}</h5>
                {cartitems.find(Itemcart => Itemcart.id === z.id) ? (
                  <button className="btn btn-secondary" onClick={() => deleteCart(z)}> Delete From Cart </button>
                ) : (
                  <button className="btn btn-dark" onClick={() => addCart(z)}> Add To Cart </button>
                )}
              </center>
            </div>
          ))}
        </div>
      </section>

      <br/><br/>

      <section>
        <div className="index1 war">
          <div className="qw1">
            <div className="row index">
              {homely3.map((m) => (
                <div className="col-12 col-lg-3 qwe1" key={m.id}>
                  <br/><br/><br/><br/><br/><br/>
                  <img src={m.img} alt={m.des} className="img-thumbnail" width="90%" height="70%" />
                  <center>
                    <h5>{m.des}</h5>
                    <h5>{m.price}</h5>
                    {cartitems.find(Itemcart => Itemcart.id === m.id) ? (
                      <button className="btn btn-secondary" onClick={() => deleteCart(m)}> Delete From Cart </button>
                    ) : (
                      <button className="btn btn-dark" onClick={() => addCart(m)}> Add To Cart </button>
                    )}
                  </center>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <br/><br/> <br/><br/>
      <section>
        <div className="index2 war">
          {homely4.map((n) => (
            <div className="col-12 col-lg-3 qw2" key={n.id}>
              <br/>
              <img src={n.img} alt={n.des} className="img-thumbnail" width="90%" height="70%"/>
              <center>
                <h5>{n.des}</h5>
                <h5>{n.price}</h5>
                {cartitems.find(Itemcart => Itemcart.id === n.id) ? (
                  <button className="btn btn-secondary" onClick={() => deleteCart(n)}> Delete From Cart </button>
                ) : (
                  <button className="btn btn-dark" onClick={() => addCart(n)}> Add To Cart </button>
                )}
              </center>
            </div>
          ))}
          {/* FIX 3: Removed the stray letter 'S' that was chilling here */}
        </div>
      </section>
      
      <br/><br/><br/><br/><br/><br/> <br/><br/>
      <section>
        <div>
          <img src={img19} alt="Quotation mark icon" className="quot"/>
          <p className="quot-text">" Campaign that reframes greatness as a choice, not an outcome. It puts 'Just Do It' into the hands of today's generation"</p>
          <h5 className="rio">By Wieden </h5>
          <i className="fa-solid fa-arrow-left arrowl"></i>
          <i className="fa-solid fa-arrow-right arrowr"></i>
        </div>
      </section>

      <section className="demin container rest"> 
        <img className="rest" src={img20} alt="Denim apparel presentation"/>
        <div className="demoo">
          <h5>DENIM COLLECTION</h5>
          <h2 className="selection">The Casual Selection</h2>
          <p className="lorems">"Clothes aren't going to change the world, but the men who wear them will. I slay every day, and I dress up well for it."</p>
          <p>shop collection &rarr;</p>
        </div>
      </section>
      <br/><br/><br/><br/><br/><br/><br/>
      
      <section>
        <div className="quote">
          <h4 className="day"> Quote of the Day</h4><br/><br/>
          <p className="par">"It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes."</p>
          <p className="para">- Dr.Seuss</p><br/>
        </div>
      </section>
      <br/><br/><br/><br/>
    </div>
  )
}

export default Home