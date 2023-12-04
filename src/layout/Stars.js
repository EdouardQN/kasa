import React from 'react'
import { FaStar } from "react-icons/fa6";
import '../styles/Stars.css'

export default function Stars(star) {
  return (
    <div className='stars'>
        <FaStar className="red" />
        <FaStar className="red"/>
        <FaStar className="red"/>
        <FaStar />
        <FaStar />
    </div>
  )
}
