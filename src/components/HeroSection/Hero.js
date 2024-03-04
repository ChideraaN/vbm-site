import React from 'react'
import './Hero.css';
import { NavBar } from '../NavBar/NavBar';

export function Hero() {
  return (
    <section className='hero-section'>
      <NavBar />
      <video src='/hero-video.mp4' autoPlay loop muted />
      <img className='vbm-image' src='/imgs/vbm-logo-large.png' alt='' />
      <a href='#buy-sell-source'>
        <img src='/imgs/chevron.svg' alt='chevron' className='chevron hero-chevron' />
      </a>
    </section>
  )
}