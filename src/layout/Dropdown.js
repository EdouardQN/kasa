import { FaAngleUp } from "react-icons/fa6";
import '../styles/Dropdown.css'


export default function Dropdown(button) {

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn">
        Button
        <FaAngleUp className="dropdown-btn-icon" />
      </button>
      
      <p className="dropdown-description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
    </div>

  )
}
