const Dropdown = () => {
    return (
        <nav>
            <h2> Dynamic Dropdown </h2>
            <select className = "menu">
                <option value = "All"> All </option>
                <option value = "Fried"> Fried </option>
                <option value = "Tomyum"> Tomyum </option>
                <option value = "Drinks"> Drinks </option>
                <option value = "Steaks"> Steaks </option>
            </select>
        </nav>
    )
}

export default Dropdown;