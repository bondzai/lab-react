import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <aside>
            <div className = "navbar">
                <div className = "navbar-toggle">
                    <Link to = "#" className = "menu-bar">
                        Link menu
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default Navigation;