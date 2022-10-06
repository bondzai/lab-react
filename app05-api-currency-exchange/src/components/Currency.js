import './Currency.css'
const Currency = (props) => {
    const {currencyChoice} = props      
    return (
        <div className = "currency">
            <select>
                {currencyChoice.map((choice)=>
                    <option key = {choice} value = {choice}> {choice} </option>
                )}
            </select>
            <input type = "number"/>
        </div>
    )
}

export default Currency;