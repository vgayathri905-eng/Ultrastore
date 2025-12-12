import React from 'react'
import "./Women.css"
import stylidhdata from '../constant/stylishdata'
import { Link } from 'react-router-dom'
import stylish2data from '../constant/stylish2data'
import { useSelector,useDispatch } from 'react-redux'
import { addTocart, deleteFromCart } from '../redux/cartslice'


const Women = () => {
   const cartitems = useSelector((state) => state.cart.cartitems);
      const dispatch = useDispatch();
  
  
      const addCart = (item) => {
          dispatch(addTocart(item)) }
  
  
      const deleteCart = (item) => {
          dispatch(deleteFromCart(item))}
  return (
    <div class="women"><center>
        <h1 class="stylee">Stylish Women </h1><br/>
        <h6>"Own your style like it's yours and nobody else's; don't let it own you."</h6><br/>
        </center><br/>
        <div class="row row-cols-1 row-cols-md-4 g-4">
{
  stylidhdata.map((a)=>(

  <div class="col" key={a.id}>
    <div class="card- h-100"><br/>
        
      <img src={a.img} class="card-img-top" alt="img"/>
      <div class="card-body"><center>
        <h2>{a.title}</h2>
        <h5>{a.des}</h5>
         <h3>{a.price}</h3>
         {
           cartitems.find(Itemofcart => Itemofcart.id === a.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(a)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(a)} > Add To Cart </button>)
        }
        {/* <button type="button" class="btn btn-dark">add to cart</button> */}
        </center>
       

       
      </div>
    </div>
  </div>
  ))
}

</div><br/><br/>

<div class="row row-cols-1 row-cols-md-4 g-4">
  {
 stylish2data.map(
  (b)=>(
  <div class="col" key={b.id}>
    <div class="card- h-100"><br/>
      <img src={b.img} class="card-img-top" alt="img"/>
      <div class="card-body"><center>
        <h2>{b.title}</h2>
        <h5>{b.des}</h5>
<h3>{b.price}</h3>
{
           cartitems.find(Itemofcart => Itemofcart.id === b.id) ? (
          <button class="btn btn-secondary" onClick={() => deleteCart(b)} > Delete From Cart </button>)
            :
           (<button class="btn btn-dark" onClick={() => addCart(b)} > Add To Cart </button>)
        }
        {/* <button type="button" class="btn btn-dark">add to cart</button> */}
        <br/><br/>
        </center>
        

       
      </div>
    </div>
  </div>
  )
 )
  }
</div><br/><br/>
    </div>
  )
}

export default Women