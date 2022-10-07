import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className = "container">
      <h1> TO DO LIST </h1>
      <form className = "from-group">
        <input type = "text" className = "input-text"/>
        <button type = "submit" className = "input-button"> + </button>
      </form>
    </section>
  );
}

export default App;
