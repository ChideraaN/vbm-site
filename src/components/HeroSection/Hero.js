import React from 'react'
import './Hero.scss';

export function Hero() {
  return (
    <section className='hero-section'>
      <video id='vid' src='/hero-video.mp4' autoPlay loop muted />
      <img className='vbm-image' src='/imgs/vbm-logo-large.png' alt='' />
    </section>
  )
}