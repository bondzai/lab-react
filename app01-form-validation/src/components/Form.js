import "./Style.css"
import {useState} from "react"

const Form = () => {
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    return (
        <div className = "container">
            <form className = "form">
                <h2> REGISTER FORM </h2>
                <div className = "form-control">
                    <label> USER NAME </label>
                    <input type = "text" value = {userName} onChange = {(e) => setUserName(e.target.value)}/>
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> EMAIL </label>
                    <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> PASSWORD </label>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>                 
                    <small> error message </small>
                </div>
                <div className = "form-control">
                    <label> CONFIRM PASSWORD </label>
                    <input type = "password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>  
                    <small> error message </small>
                </div>
                <button type = "submit"> SUBMIT </button> 
            </form>
        </div>
    )
}

export default Form;