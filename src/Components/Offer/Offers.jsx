import React from 'react'
import './Offers.css'
import exclucive_image from '../Assest/Images/shopi.png'

const Offers = () => {
  return (

    <div className="clearfix">
<div className='offers'>

<div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCT</p>
<button>Cheak Now</button>
</div>

<div className="offers-right">
  <img src={exclucive_image} alt="" />
</div>
</div>
    </div>
    
  )
}

export default Offers;
