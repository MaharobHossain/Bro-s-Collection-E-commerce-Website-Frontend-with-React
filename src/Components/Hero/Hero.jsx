import React from 'react'
import './Hero.css'
import hand_icon from '../Assest/Images/hand icon.png'
import arrow_icon from '../Assest/Images/arrow icon.png'
import family_icon from '../Assest/Images/family.png'

const Hero = () => {


  return (
    <div className='hero'>
      
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>



      <div className="family-icon">
      <img src={family_icon} alt="" />
      </div>
    </div>
  )
}

export default Hero;
