import {useLocation } from 'react-router-dom'
import '../styles/Logement.css'
import Tag from '../layout/Tag'
import Stars from '../layout/Stars'
import Carrousel from '../layout/Carrousel'
import Dropdown from '../layout/Dropdown'
import Erreur404 from '../pages/Erreur404'

export default function Logement() {

  const location = useLocation();

  // Vérifier si location.state existe
  if (!location.state || !location.state.logement || !location.state.logement.logement) {
    return <Erreur404 />;
  }

  const theLogement = location.state.logement.logement;
  const carrouselImages = theLogement.props.pictures.map(
    picture => <img key={picture} alt='test' src={picture} />
  ); 
  
  return (
    <>
      <Carrousel images={carrouselImages} />

      <div className='logement'>
        <div className='logement-details'>
          <div className='logement-title'>
          <h2 className='logement-title-head'>{theLogement.props.title}</h2>
            <h4 className='logement-title-sub'>{theLogement.props.location}</h4>
          </div>

          <div className='tag-container'>
            {theLogement.props.tags.map(
              tag => <Tag key={tag} name={tag} />
            )}
          </div>
        </div>

        <div className='logement-host'>
          <div className='logement-host-name'>
            <span className='logement-host-detail'>{theLogement.props.host.name}</span>
            <img className='logement-host-picture' src={`${theLogement.props.host.picture}`} alt='Host' />
          </div>
          <Stars />
        </div>

      </div>
  
      <div className='logement-dropdowns'>
        <Dropdown
          classNameDesc = "dropdown-description-smaller"
          title="Description" 
          description={theLogement.props.description}
        />

        <Dropdown 
          classNameDesc = "dropdown-description-smaller"
          title="Equipements" 
          description={
            <ul className='logement-equipments'>
              {theLogement.props.equipments.map(item =><li className='logement-equipments-element' key={item}>{item}</li>)}
            </ul> 
          }
            
        />
      </div>


    </>
  )
}
