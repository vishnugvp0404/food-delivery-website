import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' />
            <p>"Experience the convenience of delicious meals delivered straight to your doorstep with Tomato, your go-to food delivery app. From gourmet pizzas to exotic cuisines, Tomato ensures your cravings are satisfied with just a tap."</p>
            <div className='footer-social-icons' >
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+12-3256-45689</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
