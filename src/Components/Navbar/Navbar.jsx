import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/Images/logo.png'
import cart from '../Assest/Images/Cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

      const [menu, setMenu]=useState("shop");
      const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>

      {/* <Link to='/'>    
        
      </Link> */}
      <div className="nav-logo">
           <img src={logo} alt="" />
          <p >BRO'S COLLECTION</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{ textDecoration: 'none' }}  to='/mens'>Men's</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }}  to='/womens'>Women's</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link  style={{ textDecoration: 'none' }} to='/kids'>Kid's</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">

        <Link to='/cart'><img src={cart} alt="" /> </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <Link to='/login'><button>Profile</button></Link>

      </div>

    </div>
  )
}

export default Navbar;
