// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="logo-heading">Wave</p>
    </div>
    <ul className="links">
      <li>
        <Link className="nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
