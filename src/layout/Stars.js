import {useLocation} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import '../styles/Stars.css'

export default function Stars() {
  const location = useLocation();
  const note = parseInt(location.state.logement.logement.props.rating);
  switch (note){
    case 1:
      return (
        <div className='stars'>
          <FaStar className='red'/>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      )
    case 2:
      return (
        <div className='stars'>
          <FaStar className='red'/>
          <FaStar className='red' />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      )
    case 3:
      return (
        <div className='stars'>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar />
          <FaStar />
        </div>
      )
    case 4:
      return (
        <div className='stars'>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar />
        </div>
      )
    case 5:
      return (
        <div className='stars'>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
          <FaStar className='red'/>
        </div>
      )
    default:
      return (
        <div className='stars'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
      )
  } 
}
