import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {remove,decrement,increment} from "./productSlice"

const Cart = () => {


  const [total,setTotal]=useState(0)

  const Dispatch=useDispatch()

  const ProductItem=useSelector(state=>state.productList)

  const {CartItem}=ProductItem

  useEffect(()=>{

    CartItem.map((item)=>{
      setTotal(total+item.price)})
  },CartItem)

  const DecrementCounter=(quantity,ind)=>{
    let qnt=quantity-1
    if(qnt>0){
    Dispatch(decrement({ind,qnt}))
    }
  }

  const IncrementCounter=(quantity,ind)=>{
    let qnt=quantity+1
    Dispatch(increment({ind,qnt}))
  }

  const handleRemove=(product)=>{
      Dispatch(remove(product))
  }

  const buyItem=()=>{
    if(CartItem.length>=2){
      alert("Your Order is Successfully Placed")
    }
    else{
      alert("Please order atleast 2 items")
    }
  }

  return (
    <div className="cartContainer">
      <h1 style={{textAlign:"center"}}>This is the Cart</h1>
      {CartItem.map(item=>
        <div className="cart-item">
          <img style={{width:"80px", height:"80px",margin:"5px"}} src={item.img} alt={item.name}/>

            <h3>₹ {item.baseprice} / {item.priceType}</h3>

            <div>
            <button onClick={()=>DecrementCounter(item.quantity,item.id)}>-</button>
            <b style={{margin:"20px"}}>Quantity:{item.quantity}</b>
            <button onClick={()=>IncrementCounter(item.quantity,item.id)}>+</button>
            </div>

            <h3>Price:{item.price}</h3>

            <button onClick={()=>handleRemove(item.id)}>Remove</button>

        </div>
        )}

      {/* <h3>Total Price:{total}</h3> */}

      <button className="btn" onClick={()=>buyItem()}>Buy Now</button>

    </div>
  )
}

export default Cart