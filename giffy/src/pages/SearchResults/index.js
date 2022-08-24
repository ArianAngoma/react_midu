import {useEffect, useState} from "react";

import {getGifs} from "../../services/getGifs";
import {Spinner} from "../../components/Spinner/Spinner";
import {ListOfGifs} from "../../components/ListOfGifs/ListOfGifs";

export const SearchResults = ({params}) => {
    const {keyword} = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);
        getGifs({keyword})
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
            })
    }, [keyword]);

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
