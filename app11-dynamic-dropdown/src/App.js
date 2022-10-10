import './App.css';
import Dropdown from './components/Dropdown';
import Food from './components/Food';
import {useState} from 'react'
import Menudata from './data/MenuData'

function App() {
    const [food, setFood] = useState(Menudata)
    const changeFoodData = (e) => {
        console.log(e.target.value)
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