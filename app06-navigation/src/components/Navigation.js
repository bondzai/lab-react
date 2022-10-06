import { Link } from "react-router-dom"
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = () => { setShowMenu(!showMenu) } 
    return (
        <aside>
            <div className = "navbar">
                <div className = "navbar-toggle">
                    <Link to = "#" className = "menu-bar">
                        <FaBars onClick = {toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className = {showMenu ? "nav-menu-active" : "nav-menu"}>
                <ul className = "nav-menu-items">
                    <li className = "menu-item"> 
                        <Link to = "#">
                            <FaHome/> <span> Home </span>
                        </Link> 
                    </li>
                    <li className = "menu-item"> 
                        <Link to = "#">
                            <FaHome/> <span> Home </span>
                        </Link> 
                    </li>
                    <li className = "menu-item"> 
                        <Link to = "#">
                            <FaHome/> <span> Home </span>
                        </Link> 
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation;