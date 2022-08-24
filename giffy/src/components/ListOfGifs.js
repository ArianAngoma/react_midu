import {useEffect, useState} from "react";

import {getGifts} from "../services/getGifs";
import {Gif} from "./Gif";

export const ListOfGifs = ({params}) => {
    const {keyword} = params

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getGifts({keyword}).then(gifs => setGifs(gifs));
    }, [keyword]);

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
