import {useEffect} from "react"
import './App.css';
import Currency from './components/Currency';
import money from "./img/money.png"

function App() {
  const url = "https://api.exchangerate-api.com/v4/latest/USD"
  useEffect(()=> {
    fetch(url).then(res => res.json()).then(data=>console.log(data))
  })

  fetch()
  return (
    <div>
      <img src = {money} alt = "logo" className = "img-money"/>
      <h1> Currency convertion API</h1>
        <div className = "container">
          <Currency/>
          <div className = "equal"> = </div>
          <Currency/>
        </div>
    </div>
  );
}

export default App;