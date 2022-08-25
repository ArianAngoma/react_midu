import {useState} from "react";
import {Link, useLocation} from "wouter";

const POPULAR_GIFS = ['Perú', 'JavaScript', 'Node.js', 'MongoDB'];

export const Home = () => {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation();

    console.log(path)

    const handleSubmit = (event) => {
        event.preventDefault();

        // navegar a otra ruta

        pushLocation(`/search/${keyword}`);
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="Search..."
                />

                <button>Buscar</button>

            </form>

            <h3 className="App-title">
                Los gifs más populares
            </h3>

            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
