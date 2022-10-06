const Currency = () => {
    return (
        <div className = "currency">
            <select>
                <option> THB </option>
                <option> USD </option>
                <option> EUR </option>
            </select>
            <input type = "number"/>
        </div>
    )
}

export default Currency;