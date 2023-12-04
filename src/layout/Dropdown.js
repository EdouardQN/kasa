import {useState} from "react"
import { FaAngleUp } from "react-icons/fa6";
import '../styles/Dropdown.css'


export default function Dropdown(about) {

  const [isActive, setIsActive] = useState(false);

  function toggleDescription() {
    setIsActive(!isActive);
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={toggleDescription}>
        {about.title}
        <FaAngleUp className="dropdown-btn-icon" />
      </button>
      
      <p className={isActive ? `${about.classNameDesc} active` : `${about.classNameDesc}`}>
        {about.description}
      </p>
    </div>

  )
}
