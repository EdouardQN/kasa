import React from 'react'
import '../styles/Card.css'

export default function Card(card) {
  return (
    <div className='card'>
        <h4 className='card-title'>{card.title}</h4>
    </div>
  )
}
