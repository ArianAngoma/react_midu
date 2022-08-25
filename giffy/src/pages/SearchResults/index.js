import {Spinner} from "../../components/Spinner/Spinner";
import {ListOfGifs} from "../../components/ListOfGifs/ListOfGifs";
import {useGifs} from "../../hooks/useGifs";

export const SearchResults = ({params}) => {
    const {keyword} = params;

    const {loading, gifs} = useGifs({keyword})

    return (
        <>
            {
                loading
                    ? <Spinner/>
                    : <ListOfGifs gifs={gifs}/>
            }
        </>
    )
}
