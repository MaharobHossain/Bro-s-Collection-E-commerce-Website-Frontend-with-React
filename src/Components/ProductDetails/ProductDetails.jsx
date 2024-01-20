import React, { useContext } from 'react'
import './ProductDetails.css'
import star_icon from '../Assetss/star_icon.png';
import star_dull_icon from '../Assetss/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDetails = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  

  return (
    <div className='product-details'>
      <div className="display-left">
       
       <div className="display-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
       </div>
       <div className="display-img">
        <img className='main-img' src={product.image} alt="" />
       </div>
      </div>

      <div className="display-right">
      <h1>{product.name}</h1>
      <div className="display-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(125)</p>
      </div>
      <div className="display-right-price">
        <div className="display-price-old">${product.old_price}</div>
        <div className="display-price-new">${product.new_price}</div>
      </div>
      <div className="description">
      We offer high-quality products at competitive prices. Our user-friendly interface makes it easy for you to navigate through our website. We also offer fast and efficient delivery services, so you can receive your products in no time.</div>
      <div className="right-size">
        <h1>Select Size</h1>
        <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='right-category'> <span>Category : </span>Men, Women , T-Shirt , Crop Top.</p>
      <p className='right-category'> <span>Tags : </span>Modern , Latest, Top-Seller.</p>
      </div>
    </div>
  )
}

export default ProductDetails;
