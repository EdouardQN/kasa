import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Card.css'

export default function Card(logement) {

  const Mediastyle = {
    backgroundImage: `url(${logement.props.cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" 
  }

  return (
    <NavLink 
    to={`/logement/${logement.props.id}`} state={{ logement: {logement} }}
    style={{textDecoration: "none"}}
    >
      <div className='card' style={Mediastyle}>
          <h4 className='card-title'>{logement.props.title}</h4>
      </div>
    </NavLink>

    
  )
}
