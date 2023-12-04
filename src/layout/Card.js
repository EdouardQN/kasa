import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Card.css'

export default function Card(logement) {

  const Mediastyle = {
    backgroundImage: `url(${logement.cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" 
  }



  return (
    <NavLink to="logement" style={{textDecoration: "none"}}>
      <div className='card' style={Mediastyle}>
          <h4 className='card-title'>{logement.title}</h4>
      </div>
    </NavLink>
    
  )
}
