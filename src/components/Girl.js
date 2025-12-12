import React from 'react'
import "./Girl.css"
import girlish from "../constant/girlish"
import { Link } from 'react-router-dom'
import girlish2 from "../constant/girlish2"
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'

const Girl = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addTocart(item))
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
  }
  return (
    <div class="girls"><center>
      <h1 class="girl">Fashion</h1>
      <h6>"Fashion is a form of ugliness so intolerable that we have to alter it every six months." — Oscar Wilde</h6>
    </center><br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {
          girlish.map((c) => (
            <div class="col">
              <div class="card-"><br />
                <img src={c.img} class="card-img-top" alt="img" />
                <div class=" card-body"><center>
                  <h1>{c.des}</h1>
                  <h3>{c.price}</h3>
                  {
                    cartitems.find(Itemofcart => Itemofcart.id === c.id) ? (
                      <button class="btn btn-secondary" onClick={() => deleteCart(c)} > Delete From Cart </button>)
                      :
                      (<button class="btn btn-dark" onClick={() => addCart(c)} > Add To Cart </button>)
                  }
                  {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
                </center>
                </div>
              </div>
            </div>
          )
          )
        }

      </div>
      <br />

      <div class="row row-cols-1 row-cols-md-2 g-4">
        {
          girlish2.map((d) => (
            <div class="col">
              <div class="card-"><br />
                <img src={d.img} class="card-img-top" alt="img" />
                <div class="card-body"><center>
                  <h1>{d.des}</h1>
                  <h3>{d.price}</h3>
                  {
                    cartitems.find(Itemofcart => Itemofcart.id === d.id) ? (
                      <button class="btn btn-secondary" onClick={() => deleteCart(d)} > Delete From Cart </button>)
                      :
                      (<button class="btn btn-dark" onClick={() => addCart(d)} > Add To Cart </button>)
                  }
                  {/* <button type="button" class="btn btn-dark">Add to Cart</button> */}
                </center>
                </div>
              </div>
            </div>
          )
          )
        }


      </div><br /><br />
    </div>

  )
}

export default Girl