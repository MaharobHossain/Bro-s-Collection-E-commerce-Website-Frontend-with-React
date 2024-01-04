import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offer/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';


const Shop = () => {
  return (
    <div className='w-80%'>

      <Hero/>
      <br />
      <Popular/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Offers/>
      <br />
      <NewCollections/>
      <NewsLetter/>
      
       

    </div>
  )
}

export default Shop;
