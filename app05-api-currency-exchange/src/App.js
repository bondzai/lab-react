import {useEffect, useState} from "react"
import './App.css';
import Currency from './components/Currency';
import money from "./img/money.png"

function App() {
  const url = "https://api.exchangerate-api.com/v4/latest/USD"
  const [currencyChoice,setCurrencyChoice] = useState([])

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data=>setCurrencyChoice([...Object.keys(data.rates)]))
  })

  return (
    <div>
      <img src = {money} alt = "logo" className = "img-money"/>
      <h1> Currency convertion API</h1>
        <div className = "container">
          <Currency currencyChoice = {currencyChoice}/>
          <div className = "equal"> = </div>
          <Currency currencyChoice = {currencyChoice}/>
        </div>
    </div>
  );
}

export default App;