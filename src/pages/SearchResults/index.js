import {useCallback, useEffect, useRef} from "react";
import {Helmet} from "react-helmet";
import debounce from "just-debounce-it";

import {Spinner} from "components/Spinner";
import {ListOfGifs} from "components/ListOfGifs";
import SearchForm from "components/SearchForm";

import {useGifs} from "hooks/useGifs";
import {useNearScreen} from "hooks/useNearScreen";

export const SearchResults = ({params}) => {
    const {keyword, rating = 'g'} = params;

    const {loading, gifs, setPage} = useGifs({keyword, rating});

    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

    // useCallback recibe una función y un array de dependencias
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        console.log(isNearScreen)

        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])

    return (
        <>
            {
                loading
                    ? <Spinner/>
                    : (
                        <>
                            <Helmet>
                                <title>{title} | Giffy</title>
                                <meta name="description" content={title}/>
                                <meta name="rating" content="General"/>
                            </Helmet>

                            <header className="o-header">
                                <SearchForm/>
                            </header>

                            <div className="App-wrapper">
                                <h3 className="App-title">
                                    {
                                        decodeURI(keyword)
                                    }
                                </h3>
                                <ListOfGifs gifs={gifs}/>

                                <div id="visor" ref={externalRef}></div>
                            </div>
                        </>
                    )
            }
        </>
    )
}
