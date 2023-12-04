import React, {useState} from 'react'
import '../styles/Carrousel.css'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

export default function Carrousel( {images} ) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <div className='carrousel-container'>
      <button className='carrousel-arrow arrow-left' onClick={prevImage}>
        <img src={arrowLeft} alt="Left Arrow" />
      </button>

      <div className='carrousel-images-container'>
        {images.map((image, index) => (
          <div key={index} className={`carrousel-img ${index === currentIndex ? "active" : ""}`}>
            {image}
          </div>
        ))}
      </div>

      <span className='carrousel-index'>{currentIndex + 1}/{images.length}</span>

      <button className='carrousel-arrow arrow-right' onClick={nextImage}>
        <img src={arrowRight} alt="Right Arrow" />
      </button>
    </div>
    // <div className='carrousel-container'>
    //     <button className='carrousel-arrow arrow-left' onClick={prevImage}>
    //         <img src={arrowLeft} />
    //     </button>

    //     {images.map((image, index) => (
    //     <div key={index} className={`carrousel-img ${index === currentIndex ? "active" : ""}`}>
    //       {image}
    //     </div>
    //     ))}
        
    //     <span className='carrousel-index'>1/4</span>

    //     <button className='carrousel-arrow arrow-right' onClick={nextImage}>
    //         <img src={arrowRight} />
    //     </button>
        
    // </div>
  )
}
