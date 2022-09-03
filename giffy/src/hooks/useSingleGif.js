import {useEffect, useState} from "react";
import {useGifs} from "hooks/useGifs";
import {getSingleGif} from "../services/getSingleGif";

export const useSingleGif = ({id}) => {
    const {gifs} = useGifs();

    const gifFromCache = gifs.find(gif => gif.id === id);

    const [gif, setGif] = useState(gifFromCache);

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);


    useEffect(() => {
        if (!gif) {
            setIsLoading(true);
            getSingleGif({id}).then(gif => {
                setGif(gif);
                setIsLoading(false);
            }).catch(error => {
                setIsError(true);
                setIsLoading(false);
            })
        }
    }, [gif, id]);


    return {gif, isLoading, isError}
}
