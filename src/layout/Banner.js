import React from 'react'
import '../styles/Banner.css'

export default function Banner(banner) {

  return (
    <div className='banner' style={banner.img}>
        <h1 className='banner-title'>{banner.title}</h1>
    </div>
  )
}
