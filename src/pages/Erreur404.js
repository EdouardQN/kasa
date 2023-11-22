import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Erreur404.css'

export default function Erreur404() {
  const linkHome = {
    color: "#FF6060",
  }

  return (
    <div className='error-404'>
      <h2 className='error-404-heading'>404</h2>
      <p className='error-404-p'>La page que vous demandez n'existe pas</p>
      <NavLink style={linkHome} to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}
