import {useCallback, useEffect, useRef} from "react";
import debounce from "just-debounce-it";
import {Spinner} from "components/Spinner";
import {useGifs} from "hooks/useGifs";
import {ListOfGifs} from "components/ListOfGifs";
import {useNearScreen} from "../../hooks/useNearScreen";

export const SearchResults = ({params}) => {
    const {keyword} = params;

    const {loading, gifs, setPage} = useGifs({keyword})

    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    /*const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }*/

    // useCallback recibe una función y un array de dependencias
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

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
                            <h3 className="Aoo-title">
                                {
                                    decodeURI(keyword)
                                }
                            </h3>
                            <ListOfGifs gifs={gifs}/>

                            <div id="visor" ref={externalRef}></div>
                        </>
                    )
            }
        </>
    )
}
