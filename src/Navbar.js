import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
 const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
        Fitness Website
      </Link>
      <button 
        className="hamburger"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
      <ul>
        <CustomLink to="/discover" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Discover</CustomLink>
        <CustomLink to="/spaces" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Spaces</CustomLink>
        <CustomLink to="/consult" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Consult</CustomLink>
        <CustomLink to="/routines" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>Routines</CustomLink>
        </ul>
      </div>
    </nav>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;