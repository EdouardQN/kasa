import React from 'react'
import '../styles/Banner.css'

export default function Banner(banner) {

    const img = banner.img;

  return (
    <div className='banner' style={img}>
        <h1 className='banner-title'>{banner.title}</h1>
    </div>
  )
}
