import {useContext, useEffect, useState} from "react";
import {getGifs} from "../services/getGifs";
import {GifsContext} from "../context/GifsContext";

const INITIAL_PAGE = 0;

export const useGifs = ({keyword} = {keyword: null}) => {
    const [loading, setLoading] = useState(false);

    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const [page, setPage] = useState(INITIAL_PAGE)

    const {gifs, setGifs} = useContext(GifsContext);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'peru';

    useEffect(() => {
        setLoading(true);

        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                localStorage.setItem('lastKeyword', keyword);
            })
    }, [keyword, keywordToUse]);

    useEffect(() => {
        if (page !== INITIAL_PAGE) {
            setLoadingNextPage(true)
            getGifs({keyword: keywordToUse, page})
                .then(nexGifs => {
                    setGifs(prevGifs => [...prevGifs, ...nexGifs]);
                    setLoadingNextPage(false)
                })
        }
    }, [page, keywordToUse])

    return {loading, loadingNextPage, gifs, setPage};
}
