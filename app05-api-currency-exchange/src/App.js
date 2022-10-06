import {useEffect, useState} from "react"
import './App.css';
import Currency from './components/Currency';
import money from "./img/money.png"

function App() {
  const [currencyChoice,setCurrencyChoice] = useState([])
  const [source,setSource] = useState("USD")
  const [destination,setDestination] = useState("THB")

  const [amount,setAmount] = useState(1)
  const [exchangeRate,setExchangeRate] = useState(0)


  useEffect(()=> {
    const url = `https://api.exchangerate-api.com/v4/latest/${source}`
    fetch(url)
    .then(res => res.json())
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.rates[destination])
    })
  },[source, destination])

  return (
    <div>
      <img src = {money} alt = "logo" className = "img-money"/>
      <h1> Currency convertion API</h1>
        <div className = "container">
          <Currency 
            currencyChoice = {currencyChoice} 
            selectedCurrency = {source}
            changeCurrency = {(e)=> setSource(e.target.value)}
          />
          <div className = "equal"> = </div>
          <Currency 
            currencyChoice = {currencyChoice}
            selectedCurrency = {destination}
            changeCurrency = {(e)=> setDestination(e.target.value)}
          />
         </div>
    </div>
  );
}

export default App;