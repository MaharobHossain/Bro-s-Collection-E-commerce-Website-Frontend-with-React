import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import all_product from './../Components/Assetss/all_product';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assetss/dropdown_icon.png';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
     <img className='shopcategory-banner' src={props.banner} alt="" />

     <div className="shopcategory-indexShort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcategory-short">
        Short by <img src={dropdown_icon} alt="" />
      </div>
     </div>
     
     <div className="shopcategory-products">
     {all_product.map((item, i)=>{
      if (props.category===item.category) {

        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

      }

      else{
        return null;
      }
     })}
     </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
    </div>
  )
}

export default ShopCategory
