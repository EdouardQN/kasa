import React from 'react'
import '../styles/About.css'
import Banner from '../layout/Banner'
import Dropdown from '../layout/Dropdown'
import imgBG from '../assets/banner-img-2.png'

export default function About() {

   
  return (
    <div className='about-container'>
      <Banner img={{imgBG}}/>
  
      <Dropdown
        className= "dropdown-btn" 
        classNameDesc = "dropdown-description"
        title="Fiabilité" 
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." 
      />
      <Dropdown
        className= "dropdown-btn" 
        classNameDesc = "dropdown-description"
        title="Respect" 
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
      />
      <Dropdown
        className= "dropdown-btn" 
        classNameDesc = "dropdown-description"
        title="Service" 
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
      />
      <Dropdown
        className= "dropdown-btn" 
        classNameDesc = "dropdown-description"
        title="Sécurité" 
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
      />
    </div>
  )
}
