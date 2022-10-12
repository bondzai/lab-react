const List = ({id, title, removeItem}) => {
    return (
        <div className = "list-item">
            <p className = "title"> {title} </p>
            <div className = "button-container">
                <button> update </button>     
                <button onClick={() => removeItem(id)}> delete </button>     
            </div>
        </div>
    )
}

export default List;