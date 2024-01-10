import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/Images/logo.png'
import instagram_icon from '../Assetss/instagram_icon.png'
import pin_icon from '../Assetss/pintester_icon.png'
import whats_icon from '../Assetss/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>BRO'S COLLECTION</p>
      </div>

      <ul className="footer-links">
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>OFFICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
   
      <div className="footer-social-icon">

       <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
       </div>

       <div className="footer-icons-container">
        <img src={pin_icon} alt="" />
       </div>

       <div className="footer-icons-container">
        <img src={whats_icon} alt="" />
       </div>
      </div>

     <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
     </div>
    </div>
  )
}

export default Footer;
