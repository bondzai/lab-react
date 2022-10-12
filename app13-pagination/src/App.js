import './App.css';
import Food from './components/Food'
import { useState } from 'react'
import MenuData from './data/MenuData'

function App() {
    const [foodData, setFoodData] = useState(MenuData)

      return (
        <div className = "App">
            <h1> Food cart | pagination </h1>
            <div className = "container">
                {foodData.map((item, index) => {
                    return <Food key = {index} {...item}/>
                })}
            </div>
        </div>
    )
}

export default App;