import {useEffect, useState} from "react";

import {getGifts} from "../services/getGifs";
import {Gif} from "./Gif";

export const ListOfGifs = ({params}) => {

    const {keyword} = params

    const [gifs, setGifs] = useState({
        loading: false,
        results: []
    });

    useEffect(() => {
        console.log('useEffect');

        setGifs((prevState) => ({...prevState, loading: true}));

        getGifts({keyword}).then(gifs => {
            setGifs((prevState) => ({...prevState, loading: false, results: gifs}));
        });
    }, [keyword]);

    if (gifs.loading) return <p>Loading...</p>;

    return (
        <>
            {
                gifs.results.map(({id, title, url}) => <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />)

            }
        </>
    )

}
