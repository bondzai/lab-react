import './Currency.css'
const Currency = (props) => {
    const {currencyChoice, selectedCurrency, changeCurrency} = props      
    return (
        <div className = "currency">
            <select value = {selectedCurrency} onChange = {changeCurrency}>
                {currencyChoice.map((choice)=>
                    <option key = {choice} value = {choice}> {choice} </option>
                )}
            </select>
            <input type = "number"/>
        </div>
    )
}

export default Currency;