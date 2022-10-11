import './App.css';
import {useState, useEffect} from 'react';

function App() {
    const cityName = "london"
    const apiKey = "34b7a90539b7ffbcd5b122fe1a30426c"
    const [city, setCity] = useState([])

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCity(data)
        })
    },[])

    const convertTemp = (k) => {
        return (k-273).toFixed()
    }

    return (
        <div className = "App">
            <section>
                <div className = "location">
                    <h1 className = "city"> {city.name} </h1>
                    <p className = "state"> {city.sys.country} </p>
                </div>
                <div className = "card">
                    <div className = "weather">
                        <h1> {convertTemp(city.main.temp)} &deg;c </h1>
                        <small> max : {convertTemp(city.main.temp_max)} &deg;c, min : {convertTemp(city.main.temp_min)} &deg;c</small>
                    </div>
                    <div className = "info">
                        <div className = "status"> status : {city.weather[0].main} </div>
                        <div className = "humidity"> humidity : {city.main.humidity} </div>
                        <div className = "wind"> wind speed : {city.wind.speed} </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;