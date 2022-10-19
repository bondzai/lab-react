import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleContent = ({title, description}) => {
    const [showContent,setShowContent] = useState(false)
    return (
        <article className = "content">
            <header>
                <h1> {title} </h1>
                <button className = "button" onClick = {()=> setShowContent(!showContent)}>
                    {showContent ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showContent && <p> {description} </p>}
        </article>
    )
}

export default SingleContent;