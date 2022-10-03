import "./Style.css"
import {useState} from "react"

const Form = () => {
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const [errorUserName,setErrorUserName] = useState("*Require at least 8 chars")
    const [errorEmail,setErrorEmail] = useState("*Require")
    const [errorPassword,setErrorPassword] = useState("*Require at least 8 chars")
    const [errorConfirmPassword,setErrorConfirmPassword] = useState("*Require at least 8 chars")

    const [userNameColor,setUserNameColor] = useState("")
    const [emailColor,setEmailColor] = useState("")
    const [passwordColor,setPasswordColor] = useState("")
    const [confirmPasswordColor,setConfirmPasswordColor] = useState("")

    const validateForm = (e) => {
        e.preventDefault()

        if (userName.length >= 8) {
            setErrorUserName("")
            setUserNameColor("green")
            console.log(userName.length)
        } else {
            setErrorUserName("*Require at least 8 chars")
            setUserNameColor("red")
            console.log(userName.length)
        }

        if (email.includes("@")) {
            setErrorEmail("")
            setEmailColor("green")
        } else {
            setErrorEmail("*Require correct pattern")
            setEmailColor("red")
        }

        if (password.length >= 8) {
            setErrorPassword("")
            setPasswordColor("green")
        } else {
            setErrorPassword("*Require at least 8 chars")
            setPasswordColor("red")
        }

        if (confirmPassword !== "" && password === confirmPassword) {
            setErrorConfirmPassword("")
            setConfirmPasswordColor("green")
        } else {
            setErrorConfirmPassword("Password not match")
            setConfirmPasswordColor("red")
        }
    }

    return (
        <div className = "container">
            <form className = "form" onSubmit={validateForm}>
                <h2> REGISTER FORM </h2>
                <div className = "form-control">
                    <label> USER NAME </label>
                    <input type = "text" value = {userName} onChange = {(e) => setUserName(e.target.value)} style = {{borderColor:userNameColor}}/>
                    <small style = {{color:userNameColor}}> {errorUserName} </small>
                </div>
                <div className = "form-control">
                    <label> EMAIL </label>
                    <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} style = {{borderColor:emailColor}}/>
                    <small style = {{color:emailColor}}> {errorEmail} </small>
                </div>
                <div className = "form-control">
                    <label> PASSWORD </label>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} style = {{borderColor:passwordColor}}/>                 
                    <small style = {{color:passwordColor}}> {errorPassword} </small>
                </div>
                <div className = "form-control">
                    <label> CONFIRM PASSWORD </label>
                    <input type = "password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} style = {{borderColor:confirmPasswordColor}}/>  
                    <small style = {{color:confirmPasswordColor}}> {errorConfirmPassword} </small>
                </div>
                <button type = "submit"> SUBMIT </button> 
            </form>
        </div>
    )
}

export default Form;