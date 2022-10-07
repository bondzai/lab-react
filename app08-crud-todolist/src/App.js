import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState("")
  const [list,setList] = useState([])

  const submitData = (e) => {
    e.preventDefault()
    const newTask = {
      id : uuidv4(),
      title : name
    }
    setList([...list,newTask])
    setName("")
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
