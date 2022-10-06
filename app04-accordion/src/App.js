import {useState} from "react";
import SingleContent from "./components/SingleContent";
import data from "./data";

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className = "container">
        <h1>Web development tools</h1>
          <section>
          {content.map((data)=>{
              return <SingleContent  key = {data.id} {...data}/>
            })}
          </section>
      </div>
    </main>
  );
}

export default App;