const Dropdown = ({changeFoodData}) => {
    return (
        <nav>
            <h2> Dynamic Dropdown </h2>
            <select className = "menu" onChange = {changeFoodData}>
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