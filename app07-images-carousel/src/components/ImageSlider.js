import ImageData from "./imageData";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const ImageSlider = () => {
    console.log(ImageData)
    return (
        <section className = "slider">
            <AiOutlineArrowLeft className = "arrow-left"/>
            {ImageData.map((data,index) => {
                return (
                    <div className = "single" key = {index}>
                        <div>
                            <img src = {data.image} alt = {data.title} className = "image"/>
                            <p>{data.title}</p>
                        </div>
                    </div>
                )
            })}
            <AiOutlineArrowRight className = "arrow-right"/>
        </section>
    )
}

export default ImageSlider;