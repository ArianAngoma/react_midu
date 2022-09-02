import {useCallback} from "react";
import {useLocation} from "wouter";
import {useGifs} from "hooks/useGifs";
import {ListOfGifs} from "components/ListOfGifs";
import {LazyTrending} from "components/TrendingSearches";
import SearchForm from "../../components/SearchForm";

export default function Home() {

    const [path, pushLocation] = useLocation();

    const {loading, gifs} = useGifs();

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

    return (
        <>

            <SearchForm onSubmit={handleSubmit}/>

            <div className="App-main">

                <div className="App-results">

                    <h3 className="App-title">
                        Los gifs más recientes
                    </h3>

                    <ListOfGifs gifs={gifs}/>

                </div>

                <div className="App-category">

                    <LazyTrending/>

                </div>

            </div>

        </>
    )
}
