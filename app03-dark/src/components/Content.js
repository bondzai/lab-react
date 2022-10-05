import light from "../image/light.svg"
import dark from "../image/dark.svg"

const Content = () => {
    return (
        <main>
            <div>
                <h1> InroBond </h1>
                <p> Light/Dark Mode </p>
            </div>
            <img src = {light} alt = "Logo"/>
        </main>

    )
}

export default Content;