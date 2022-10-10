import light from "../image/light.svg"
import dark from "../image/dark.svg"
import { useContext } from "react"
import { ThemeContext } from "../App"

const Content = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <main className = {theme === "dark" ? "dark" : "light"}>
            <div>
                <h1> InroBond </h1>
                <p> Light/Dark Mode </p>
            </div>
            <img src = {theme === "dark" ? dark : light} alt = "Logo"/>
        </main>

    )
}

export default Content;