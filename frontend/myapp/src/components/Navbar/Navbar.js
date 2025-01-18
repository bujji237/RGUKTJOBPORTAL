import  {React} from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className = "navbar-contaiener">
            <div className = "navbar-logo-container">
                <p className = "navbar-logo">RGUKT JOBS</p>
            </div>
            <div className = 'navbar-items-container'>
                <ul className = 'navbar-items-list'>
                    <Link to = "/visited-companies" ><li className = 'navbar-items-item'>Jobs</li></Link>
                    <li className = 'navbar-items-item'>Jobs</li>
                    <li className = 'navbar-items-item'>Almuni</li>
                    <li className = 'navbar-items-item'>Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;