import React from 'react'
import '../styles/Tag.css'

export default function Tag(tag) {
  return (
    <button className='tag'>
        <span className='tag-name'>{tag.name}</span>
    </button>
  )
}
