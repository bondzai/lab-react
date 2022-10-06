import ImageData from "./imageData";

const ImageSlider = () => {
    console.log(ImageData)
    return (
        <section className = "slider">
            {ImageData.map((data,index) => {
                return (
                    <div className = "single" key = {index}>
                        <div>
                            <img src = {data.image} alt = {data.title}/>
                            <p>{data.title}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;