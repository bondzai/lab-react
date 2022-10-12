import './App.css';
import Food from './components/Food'
import { useState } from 'react'
import MenuData from './data/MenuData'

function App() {
    const [foodData, setFoodData] = useState(MenuData)

      return (
        <div className="App">
            <Food/>
        </div>
    )
}

export default App;