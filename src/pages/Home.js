import React, {useState, useEffect} from 'react'
import '../styles/Home.css'
import Banner from '../layout/Banner'
import Card from '../layout/Card'


export default function Home() {

  const [logements, setLogements] = useState(null)

  useEffect(() => {
    fetch('/logements.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      return response.json();
    })
    .then(data => {
      setLogements(data);
    })
    .catch(error => {
      console.error('Error fetching logements.json:', error);
    });
  }, [])

  return (
    <>
    
      <Banner title = "Chez vous, partout et ailleurs" class='banner' />
      <div className='card-container'>
        {logements && logements.map(
          (logement) => {
            return <Card 
              key={logement.id} 
              props= {logement}
            />
          }
        )}
      </div>

      
    
    </>
  )
}
