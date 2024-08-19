import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quicksearch">Quick Search</NavLink>
            <NavLink to="/detailsearch">Detailed Search</NavLink>
        </nav>
    )
}

export default NavBar;