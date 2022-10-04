import {useEffect, useState} from "react"
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
    const [current,setCurrent] = useState(0)
    const [selectedChoice,setSelectedChoice] = useState("")

    useEffect(() => {
        checkAnswer()
    },[selectedChoice])
    
    const checkAnswer = () => {
        if ((selectedChoice != "") && (selectedChoice === QuestionsData[current].answer)) {
            console.log("Correct")
        } else {
            console.log("Wrong")
        }
    }

    return (
        <div className = "quiz">
            <h1> {QuestionsData[current].question} </h1>
            <div className="choices">
                <button onClick = {()=> setSelectedChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick = {()=> setSelectedChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick = {()=> setSelectedChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick = {()=> setSelectedChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;