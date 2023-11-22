import React from 'react'
import '../styles/Home.css'
import Banner from '../layout/Banner'
import Card from '../layout/Card'


export default function Home() {
  return (
    <>
      <Banner title = "Chez vous, partout et ailleurs"/>

      <div className='card-container'>
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </div>

      
    
    </>
  )
}
