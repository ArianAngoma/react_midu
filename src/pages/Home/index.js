import {useCallback} from "react";
import {useLocation} from "wouter";
import {useGifs} from "hooks/useGifs";
import {ListOfGifs} from "components/ListOfGifs";
import {LazyTrending} from "components/TrendingSearches";
import SearchForm from "../../components/SearchForm";
import {Helmet} from "react-helmet";

export default function Home() {

    const [path, pushLocation] = useLocation();

    const {loading, gifs} = useGifs();

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

    return (
        <>

            <Helmet>
                <title>Home | Giffy</title>
                <link rel="canonical" href="https://giffy-arian.vercel.app/"/>
            </Helmet>

            <header className="o-header">
                <SearchForm onSubmit={handleSubmit}/>
            </header>

            <div className="App-wrapper">
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
            </div>

        </>
    )
}
