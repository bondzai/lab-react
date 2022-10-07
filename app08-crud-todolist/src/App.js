import './App.css';

function App() {
  return (
    <section className = "container">
      <h1> TO DO LIST </h1>
      <form className = "form-group">
        <div className = "form-control">
          <input type = "text" className = "input-text"/>
          <button type = "submit" className = "input-button"> + </button>
        </div>
      </form>
    </section>
  );
}

export default App;
