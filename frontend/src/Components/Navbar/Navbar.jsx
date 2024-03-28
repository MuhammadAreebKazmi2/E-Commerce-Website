import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
export const Navbar = () => {
    const [menu, setMenu] = useState("");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>HU DUKAAN</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>(setMenu("shop"))} ><Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>(setMenu("women"))} ><Link style={{textDecoration:'none'}} to='/women'>Merch</Link>  {menu==="women"?<hr/>:<></>} </li>
            <li onClick={()=>(setMenu("kids"))} ><Link style={{textDecoration:'none'}} to='/kids'>Accessory</Link>  {menu==="kids"?<hr/>:<></>} </li>
            <li onClick={()=>(setMenu("men"))} ><Link style={{textDecoration:'none'}} to='/men'>New Arrivals</Link> {menu==="men"?<hr/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
            <Link style={{textDecoration:'none'}} to='/login'> <button>Login</button></Link>
            <Link style={{textDecoration:'none'}} to='/cart'> <img src={cart_icon} alt=''></img></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
