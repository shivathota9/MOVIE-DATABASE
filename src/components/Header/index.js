import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header">
    <div className="headerLeft">
      <h1>movieDB</h1>
      <Link to="/" style={{textDecoration: 'none'}}>
        <button type="button">Popular</button>
      </Link>
      <Link to="/top-rated" style={{textDecoration: 'none'}}>
        <button type="button">Top Rated</button>
      </Link>
      <Link to="/upcoming" style={{textDecoration: 'none'}}>
        <button type="button">Upcoming</button>
      </Link>
      <input type="text" placeholder="Search" />
      <button type="button">Search</button>
    </div>
  </nav>
)

export default Header