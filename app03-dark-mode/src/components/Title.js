import { useState } from "react";
import Switch from "react-switch"

const Title = () => {
    const [theme, setTheme] = useState(false)
    const toggleSwitch = (checked) => {
        setTheme(checked)
    }
    return (
        <header>
            <span> Mode </span>
            <Switch
                onChange = {toggleSwitch}
                checked = {theme} 
            />
        </header>
    )
}

export default Title;