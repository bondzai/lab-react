import './Calculator.css';

const Calculator = () => {
    return (
        <div className = "calculator">
            <div className = "calculator-display">
                <h1> 0 </h1>
            </div>
            <div className = "calculator-button">
                <button className = "button-operation"> + </button>
                <button className = "button-operation"> - </button>
                <button className = "button-operation"> x </button>
                <button className = "button-operation"> / </button>
                <button className = "button-number">7</button>
                <button className = "button-number">8</button>
                <button className = "button-number">9</button>
                <button className = "button-number">4</button>
                <button className = "button-number">5</button>
                <button className = "button-number">6</button>
                <button className = "button-number">1</button>
                <button className = "button-number">2</button>
                <button className = "button-number">3</button>
                <button className = "button-number">.</button>
                <button className = "button-number">0</button>
                <button className = "button-clear">c</button>
                <button className = "button-equal">=</button>
            </div>
        </div>
    )
}

export default Calculator;