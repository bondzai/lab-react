import './App.css';
import Dropdown from './components/Dropdown';
import Food from './components/Food';
import {useState} from 'react'
import Menudata from './data/MenuData'

function App() {
    const [food, setFood] = useState(Menudata)
    return (
        <div className = "container">
            <Dropdown/>
            <div className = 'content'>
                {food.map((item, index) => {
                    return <Food key = {index} {...item}/>
                })}
            </div>
        </div>
    )
}

export default App;