import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import '../styles/Header.css'

export default function Header() {

  const linksStyle = {
    color: "#FF6060",
    textDecoration: "none",
    marginLeft: "24px",
    marginRight: "24px"
  }


  return (
    <header className='header-main'>
      <nav className='header-main-nav'>
        <img className='header-main-logo' src={Logo} alt='Logo' />
        <NavLink style={linksStyle} to="/">Accueil</NavLink>
        <NavLink style={linksStyle} to="about">A propos</NavLink>
      </nav>
    </header>
  )
}
