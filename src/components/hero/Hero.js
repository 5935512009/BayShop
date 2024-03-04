import React from 'react'
import skullpanda_dark_maid from '../../assets/skullpanda_dark_maid.png'
import skullpanda_13th_anniversary from '../../assets/skullpanda_13th_anniversary.png'
import './hero.css'
import { FaArrowRight } from "react-icons/fa6";
export const Hero = () => {
  return (
    <>
    <div className='hero'>
      <div className='hero-left'>
        <h2>Hew gadgets</h2>
        <div>
          <div className='hero-icon'>
            <p>new</p>
            <img src={skullpanda_dark_maid} alt="hero images not work "/>
          </div>
          <p>collection</p>
          <p>for newbie</p>
        </div>
        <div className='hero-lates-btn'>
          <div>Latest Collection</div>
          <FaArrowRight />

        </div>
      </div>
      <div className='hero-right'>
      <img src={skullpanda_13th_anniversary} alt="Latest Collection not work"/>
      </div>
    </div>       
    </>
  )
}
