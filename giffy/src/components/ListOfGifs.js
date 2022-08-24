import {useEffect, useState} from "react";

import {getGifts} from "../services/getGifs";
import {Gif} from "./Gif";

export const ListOfGifs = ({params}) => {
    const [loading, setLoading] = useState(false);

    const {keyword} = params

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        setLoading(true);
        getGifts({keyword}).then(gifs => {
            setGifs(gifs)
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            {
                gifs.map(({id, title, url}) => <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />)

            }
        </>
    )

}
