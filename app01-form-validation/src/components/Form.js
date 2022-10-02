import "./Style.css"
const Form = () => {
    return (
        <div className = "container">
            <form className = "form">
                <h2> REGISTER FORM </h2>
                <div className = "form-control">
                    <label> USER NAME </label>
                    <input type = "text" />
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> EMAIL </label>
                    <input type = "text" />
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> PASSWORD </label>
                    <input type = "text" />
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> CONFIRM PASSWORD </label>
                    <input type = "text" />
                    <small> error message </small>
                </div>
                <button type = "submit"> SUBMIT </button> 
            </form>
        </div>
    )
}

export default Form;