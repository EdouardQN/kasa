import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import '../styles/Header.css'

export default function Header() {

 


  return (
    <header className='header-main'>
      <nav className='header-main-nav'>
        <img className='header-main-logo' src={Logo} alt='Logo' />
        <NavLink className='header-main-link' to="/">Accueil</NavLink>
        <NavLink  className='header-main-link' to="about">A propos</NavLink>
      </nav>
    </header>
  )
}
