import { Link } from "react-router-dom"
import { FaBars, FaHome, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './Navigation.css'
import MenuData from "../data/MenuData";

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
            <nav className = {showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className = "nav-menu-items" onClick = {toggleMenu}>
                    <li className = "navbar-toggle">
                        <Link to = "#">
                            <FaWindowClose onClick = {toggleMenu}/>
                        </Link>
                    </li>
                    {MenuData.map((menu,index) => {
                        return (
                            <li className = "menu-item" key = {index}> 
                                <Link to = {menu.path}>
                                    {menu.icon} <span> {menu.title} </span>
                                </Link> 
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation;