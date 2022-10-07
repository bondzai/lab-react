import ImageData from "./imageData";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { useState } from "react";

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const slideBack = () => {
        setCurrent(current - 1)
    }
    const slideForward = () => {
        setCurrent(current + 1)
    }

    return (
        <section className = "slider">
            <AiOutlineArrowLeft className = "arrow-left" onClick={slideBack}/>
            {ImageData.map((data,index) => {
                return (
                    <div className = {index === current ? "single active" : "single"} key = {index}>
                        <div>
                            <img src = {data.image} alt = {data.title} className = "image"/>
                            <p>{data.title}</p>
                        </div>
                    </div>
                )
            })}
            <AiOutlineArrowRight className = "arrow-right" onClick={slideForward}/>
        </section>
    )
}

export default ImageSlider;