import React from 'react'
import './NewCollection.css'


import popular_item1 from '../Assest/Images/hree.png'
import popular_item2 from '../Assest/Images/hrii.png'
import popular_item3 from '../Assest/Images/huuu.png'
import popular_item4 from '../Assest/Images/hyyy.png'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="product_img">
      <img className='kk' src={popular_item1} alt="" />
      <img className='aa' src={popular_item2} alt="" />
      <img className='bb' src={popular_item3} alt="" />
      <img className='cc' src={popular_item4} alt="" />
      </div>
      
      
    </div>
  )
}

export default NewCollections;
