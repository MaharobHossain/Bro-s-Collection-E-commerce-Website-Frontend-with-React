import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offer/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import './CSS/Shop.css'
// import Shop from './Shop';




const Shop = () => {
  return (

    <div className='clearfix'>
    <div  className='w-80%'  >

      <Hero/>
      <Popular/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
       

    </div>
    </div>
  )
}

export default Shop;
