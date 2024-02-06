import { Outlet, NavLink } from "react-router-dom";
import './NavBar.scss'

export function NavBar() {
  return (
    <div className="container">
        <nav>
          <ul className="nav-bar">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : '')} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Stock">Stock</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/HQ">HQ</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
    </div>
  )
}