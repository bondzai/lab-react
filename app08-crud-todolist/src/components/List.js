const List = ({id,title,removeTask}) => {
    return (
        <div className = "list-item">
            <p className = "title"> {title} </p>
            <div className = "button-container">
                <button> update </button>     
                <button onClick={() => removeTask(id)}> delete </button>     
            </div>
        </div>
    )
}

export default List;