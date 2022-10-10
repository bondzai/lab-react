import './App.css';
import Dropdown from './components/Dropdown';
import Food from './components/Food';
import {useState} from 'react'
import Menudata from './data/MenuData'

function App() {
    const [food, setFood] = useState(Menudata)
    const changeFoodData = (e) => {
        const category = e.target.value
        if (category === "All") {
            setFood(Menudata)
        } else {
            const result = Menudata.filter((item) => {
                return item.menu === category
           })
           setFood(result)
        }
    }

    return (
        <div className = "container">
            <Dropdown changeFoodData = {changeFoodData}/>
            <div className = 'content'>
                {food.map((item, index) => {
                    return <Food key = {index} {...item}/>
                })}
            </div>
        </div>
    )
}

export default App;