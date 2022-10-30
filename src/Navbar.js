import { Link, useMatch, useResolvedPath } from "react-router-dom"

 const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Fitness Website
      </Link>
      <ul>
        <CustomLink to="/discover">Discover</CustomLink>
        <CustomLink to="/spaces">Spaces</CustomLink>
        <CustomLink to="/consult">Consult</CustomLink>
        <CustomLink to="/routines">Routines</CustomLink>
      </ul>
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