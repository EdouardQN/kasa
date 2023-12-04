import React from 'react'
import '../styles/Logement.css'
import bannerImg1 from '../assets/banner-img-1.png'
import bannerImg2 from '../assets/banner-img-2.png'
import background from '../assets/Background.png'
import Tag from '../layout/Tag'
import Stars from '../layout/Stars'
import Carrousel from '../layout/Carrousel'
import Dropdown from '../layout/Dropdown'

export default function Logement() {

  const carrouselImages = [
    <img key="img2" alt='test' src={background} />,
    <img key="img1" alt='test' src={bannerImg2} />,
    <img key="img3" alt='test' src={bannerImg1} />
  ];

  return (
    <>
      <Carrousel images={carrouselImages} />

      <div className='logement'>
        <div className='logement-details'>
          <div className='logement-title'>
          <h2 className='logement-title-head'>Cozy loft on the Canal Saint-Martin</h2>
            <h4 className='logement-title-sub'>Paris, Île-de-France</h4>
          </div>

          <div className='tag-container'>
            <Tag name="Cozy" />
            <Tag name="Canal" />
            <Tag name="Paris 10" />
          </div>
        </div>

        <div className='logement-host'>
          <div className='logement-host-name'>
            <span className='logement-host-detail'>Alexandre Dumas</span>
            <img className='logement-host-picture' src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg' alt='Host' />
          </div>
          <Stars />
        </div>

      </div>
  


      <div className='logement-dropdowns'>
        <Dropdown
          classNameDesc = "dropdown-description-smaller"
          title="Description" 
          description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />

        <Dropdown 
          classNameDesc = "dropdown-description-smaller"
          title="Equipements" 
          description="Climatisation
          Wi-Fi
          Cuisine
          Espace de travail
          Fer à repasser
          Sèche-cheveux
          Cintres"
        />
      </div>


    </>
  )
}
