import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {add} from "./productSlice"

const Home = (props) => {

  const Dispatch= useDispatch()

  // const { name, price, priceType : type, img} = props.item;

  const ProductItem=useSelector(state=>state.productList)
  console.log(ProductItem)

  const {Item,CartItem}=ProductItem
  const handleAdd=(Product)=>{
      // const Add=Item.find((item)=>item.id === Product)
      // Dispatch(add(Add))
      Dispatch(add(Product))
      console.log(CartItem)
  }

  return (
    <div className="homeContainer" >
      <h2 style={{fontSize:"50px"}}>Welcome to the biggest Thali's ordering website</h2>
      <div>
        {Item.map((item)=>
          <div className="itemDiv">
            <img style={{width:"150px", height:"150px",margin:"5px"}} src={item.img} alt={item.name} />
            <div>
              <b>Name : {item.name} </b><br/>
              <b>Price : ₹ {item.price} / {item.priceType}</b><br/>
              <button onClick={()=>handleAdd(item)}>Add to Cart</button>
            </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Home