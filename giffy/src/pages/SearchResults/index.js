import {Spinner} from "../../components/Spinner";
import {useGifs} from "../../hooks/useGifs";
import {ListOfGifs} from "../../components/ListOfGifs";

export const SearchResults = ({params}) => {
    const {keyword} = params;

    const {loading, gifs} = useGifs({keyword})

    return (
        <>
            {
                loading
                    ? <Spinner/>
                    : (
                        <>
                            <h3 className="Aoo-title">{keyword}</h3>
                            <ListOfGifs gifs={gifs}/>
                        </>
                    )
            }
        </>
    )
}
