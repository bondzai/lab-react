const SingleContent = ({title, description}) => {
    return (
        <article className = "content">
            <header>
                <h1> {title} </h1>
                <button className = "button"> Read more detail </button>
            </header>
            <p> {description} </p>
        </article>
    )
}

export default SingleContent;