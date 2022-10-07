import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState(``)
  const submitData = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <section className = "container">
      <h1> TO DO LIST </h1>
      <form className = "form-group" onSubmit = {submitData}>
        <div className = "form-control">
          <input type = "text" 
            className = "input-text" 
            onChange = {(e) => setName(e.target.value)}
            value = {name}
          />
          <button type = "submit" className = "input-button"> + </button>
        </div>
      </form>
    </section>
  );
}

export default App;
