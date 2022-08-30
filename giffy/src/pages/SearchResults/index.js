import {Spinner} from "components/Spinner";
import {useGifs} from "hooks/useGifs";
import {ListOfGifs} from "components/ListOfGifs";

export const SearchResults = ({params}) => {
    const {keyword} = params;

    const {loading, gifs, setPage} = useGifs({keyword})

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

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
                        </>
                    )
            }

            <br/>

            <button onClick={handleNextPage}>
                Get next page
            </button>
        </>
    )
}
