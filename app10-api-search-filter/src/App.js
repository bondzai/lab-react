import './App.css';
import {useState} from 'react';

function App() {
    const data = [
        {id : 1, name : 'Thailand', region : 'Asia', population : 100},
        {id : 2, name : 'Japan', region : 'Asia',population : 1000},
        {id : 3, name : 'USA', region : 'America',population : 10000}
    ]
    const [country, setCountry] = useState(data)
    return (
        <div className = "contaioner">
            <ul>
                {country.map((item) => {
                    return (
                        <li key = {item.id}> {item.name} </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;