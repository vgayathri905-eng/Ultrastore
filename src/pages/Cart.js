import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,updateQuantity } from '../redux/cartslice';
import "./Cart.css"
const Cart = () => {

     const cartitems = useSelector((state) => state.cart.cartitems);
         const dispatch=useDispatch()

           const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }
    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }
           )
          )
        }
      }
  return (
    <div className='carts'>
        <center><br/>
            <h4>OUR CART ITEMS 🛒</h4><br/>
            <div className='row'>
             {
      cartitems.map((s)=>(
      <div class=" col-4 card rust">
   <h1 class="card-"></h1>
    <img src={s.img} class="card-img-top" alt="img"/>
          <div class="card-footer ">
 <center><br/>  
      <h3>{s.des}</h3>
      <h4>{s.price}</h4>    
<div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => { decrementCart(s.id, s.quantity) }}>-</button>
          
            <span style={{ margin: "0 10px" }}>{s.quantity}</span>
          
             <button onClick={() => { incrementCart(s.id, s.quantity) }} >+</button>
              </div>
<button class="btn btn-dark cartbutton" onClick={() => deleteCart(s)} style={{ backgroundColor: 'black' }}> Delete </button>
      
      </center> 
    </div>
  </div>
    )
    )
  }
      </div>
        </center>
    </div>
  )
}
export default Cart