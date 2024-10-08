import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/fun">Fun</NavLink>
            <NavLink to="/quicksearch">Quick Search</NavLink>
            <NavLink to="/detailsearch">Detailed Search</NavLink>
        </nav>
    )
}

export default NavBar;