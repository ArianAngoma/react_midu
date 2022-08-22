import {useEffect, useState} from "react";
import './App.css';

import {getGifts} from "./services/getGifs";


function App() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getGifts({keyword: 'rick'}).then(gifs => setGifs(gifs));
    }, [])

    return (
        <div className="App">
            <section className="App-content">

                {
                    gifs.map((gif) => (
                        <div key={gif.id}>
                            <h4>{gif.title}</h4>
                            <small>{gif.id}</small>
                            <img src={gif.url} alt={gif.title}/>
                        </div>
                    ))
                }

                <button>
                    Cambiar gifs
                </button>
            </section>
        </div>
    );
}

export default App;
