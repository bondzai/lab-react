import { useState } from "react";

const SingleContent = ({title, description}) => {
    const [showContent,setShowContent] = useState(false)
    return (
        <article className = "content">
            <header>
                <h1> {title} </h1>
                <button className = "button" onClick = {()=>setShowContent(!showContent)}> Read more detail </button>
            </header>
            {showContent && <p> {description} </p>}
        </article>
    )
}

export default SingleContent;