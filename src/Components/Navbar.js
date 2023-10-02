import React from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import  "./Navbar.css"

const Navbar = () => {
  const ProductItem=useSelector(state=>state.productList.CartItem)
  console.log(ProductItem)
  const Nevigate=useNavigate()
  return (
    <div className="NavContainer">
      <h1>Thali App</h1>
      <div>
      <span style={{marginRight:"200px"}}className="home" onClick={()=>Nevigate("/")}>Home</span>
      <span style={{marginRight:"200px"}} className="home" onClick={()=>Nevigate("/cart")} >Cart</span> 
      <span><img style={{height:"50px",width:"50px",borderRadius:"50%"}}
       src="https://tse4.mm.bing.net/th?id=OIP.M1G58cJVNe6qwpTCzEl9TgHaGe&pid=Api&P=0" alt="Cart Logo"/>
       <b style={{fontSize:"30px"}}>{ProductItem.length}</b></span>
      </div>

    </div>
  )
}

export default Navbar