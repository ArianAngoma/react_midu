import {useState} from "react";
import {useLocation} from "wouter";
import {useGifs} from "../../hooks/useGifs";
import {ListOfGifs} from "../../components/ListOfGifs";
import {Category} from "../../components/Category";

const POPULAR_GIFS = ['Perú', 'JavaScript', 'Node.js', 'MongoDB'];

export const Home = () => {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation();

    const {loading, gifs} = useGifs();

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
                <button>Buscar</button>

                <input
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="Search..."
                />

            </form>

            <div className="App-main">

                <div className="App-results">

                    <h3 className="App-title">
                        Los gifs más recientes
                    </h3>

                    <ListOfGifs gifs={gifs}/>

                </div>

                <div className="App-category">

                    <Category
                        name="Categorias populares"
                        options={POPULAR_GIFS}
                    />

                    <Category
                        name="Mascotas"
                        options={['Perros', 'Gatos', 'Peces', 'Aves']}
                    />

                </div>

            </div>

        </>
    )
}
