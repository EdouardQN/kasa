import React from 'react'
import '../styles/Footer.css'
import LogoWhite from '../assets/logo-white.svg'

export default function Footer() {
  return (
    <footer className='footer-main'>
      <img className='footer-main-logo' src={LogoWhite} alt='logo' />
      <p className='footer-main-p'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
