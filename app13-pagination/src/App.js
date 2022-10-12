import './App.css';
import Food from './components/Food'
import { useEffect, useState } from 'react'
import MenuData from './data/MenuData'

function App() {
    const [foodData, setFoodData] = useState(MenuData)
    const [dataInPage, setDataInPage] = useState([])
    const [page, setPage] = useState(0)

    const pagination = () => {
        const foodPerPage = 4
        const pages = Math.ceil(MenuData.length / foodPerPage)
        const newFood = Array.from({length : pages}, (data, index) =>{
            const start = index * foodPerPage
            return MenuData.slice(start, start + foodPerPage)
        })
        return newFood
    }

    const controlPage = (index) => {
        setPage(index)
    }

    useEffect(()=> {
        const paginate = pagination()
        setDataInPage(paginate)
        setFoodData(paginate[page])
    },[page])

      return (
        <div className = "App">
            <h1> Food cart | pagination </h1>
            <div className = "container">
                {foodData.map((item, index) => {
                    return <Food key = {index} {...item}/>
                })}
            </div>
            <div className = "pagination-container">
                {dataInPage.map((item, index) => {
                    return  (
                        <button key = {index} onClick = {()=> controlPage(index)} className = {`page-button ${index === page ? "button-active" : null}`}> {index + 1} </button>
                    )
                })}
            </div>
        </div>
    )
}

export default App;