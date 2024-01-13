import React, { useContext } from 'react'
import './CartItems.css'
import all_product from './../Assetss/all_product';
import { ShopContext } from './../../Context/ShopContext';
import remove_icon from '../Assetss/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='CartItems'>
      <div className="cart-formate">
        <p>Products</p>
        <p>Titel</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
         if(cartItems[e.id]>0)
         {
            return   <div>
                <div className="crt-format cart-formate">
                <img src={e.image} alt='' className='carticon-product' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cart-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
         }
         return null;
      })}
      <div className="cart-down">
        <div className="cart-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cart-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
                </div>
                <hr />
                <div className='cart-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHEAKOUT</button>
        </div>
        <div className="cart-pomo-code">
            <p>If you have a Promo code, Enter it here</p>
            <div className="cart-pomo-box">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;
