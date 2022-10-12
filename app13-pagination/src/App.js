import './App.css';
import Food from './components/Food'
import { useEffect, useState } from 'react'
import MenuData from './data/MenuData'

function App() {
    const [foodData, setFoodData] = useState(MenuData)
    const pagination = () => {
        const foodPerPage = 5
        const page = Math.ceil(MenuData.length / foodPerPage)
        console.log(page)
    }

    useEffect(()=> {
        pagination()
    },[])

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