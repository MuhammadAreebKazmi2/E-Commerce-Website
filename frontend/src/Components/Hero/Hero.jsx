import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/logo_big.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>HU Dukaan x HU</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>elevating</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>community's</p>
                <p>experience</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""></img>
        </div>
    </div>
  )
}

export default Hero