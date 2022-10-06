import './App.css';
import Currency from './components/Currency';
import money from "./img/money.png"
function App() {
  return (
    <div>
      <img src = {money} alt = "logo"/>
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