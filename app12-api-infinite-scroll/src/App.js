import './App.css';
import Photo from './components/Photo';
import {useEffect, useState} from 'react';

function App() {
    const api_key = `hiux8ewp2Amz_S5CVMvpO5MDeisItj9q9r_TAJoQglE`
    const [photos, setPhotos] = useState([])

    const fetchImage = async () => {
        const api_url = `https://api.unsplash.com/photos/?client_id=${api_key}&page=1`
        const response = await fetch(api_url)
        const data = await response.json()
        setPhotos(data)
    }

    useEffect(() => {
        fetchImage()
    },[])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {
                console.log('load content')
            }
        })
        return () => window.removeEventListener('scroll', Event)
    },[])

    return (
        <main className = "App">
            <h1> INFINITE SCROLL PHOTO | UNSPLASH API </h1>
            <section className = 'photos'>
                <div className = 'display-photo'>
                    {photos.map((item, index) => {
                        return <Photo key = {index} {...item}/>
                    })}
                </div>
            </section>
        </main>
    )
}

export default App;