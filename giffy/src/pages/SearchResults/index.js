import {useCallback, useEffect, useRef} from "react";
import debounce from "just-debounce-it";
import {Spinner} from "components/Spinner";
import {useGifs} from "hooks/useGifs";
import {ListOfGifs} from "components/ListOfGifs";
import {useNearScreen} from "hooks/useNearScreen";
import {Helmet} from "react-helmet";

export const SearchResults = ({params}) => {
    const {keyword} = params;

    const {loading, gifs, setPage} = useGifs({keyword})

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
