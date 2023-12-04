import React, {useState, useEffect} from 'react'
import '../styles/Home.css'
import Banner from '../layout/Banner'
import Card from '../layout/Card'

export default function Home() {

  const [logements, setLogements] = useState(null)

  useEffect(() => {
    fetch('logements.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setLogements(data);
    })
  }, [])

  return (
    <>
      <Banner title = "Chez vous, partout et ailleurs"/>
      
      <div className='card-container'>
        {logements && logements.map(
          (logement) => {
            return <Card key={logement.id} title={logement.title} cover={logement.cover} />
          }
        )}
      </div>

      
    
    </>
  )
}
