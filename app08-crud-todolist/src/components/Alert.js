import {useEffect} from "react"

const Alert = ({text,type,setAlert,list}) => {
    useEffect(()=>{
        const timeOut = setTimeout(() => {
            setAlert({show : false, text : "", type : ""})
        },3000)
        return () => clearTimeout(timeOut)
    },[list])

    return (
        <p className = {`alert ${type}`}> {text} </p>
    )
}

export default Alert;