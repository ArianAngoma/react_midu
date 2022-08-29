import {useEffect, useRef, useState} from "react";
import {getTrendingTermsService} from "services/getTrendingTermsService";
import {Category} from "../Category";

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTermsService().then(setTrends);
    }, []);

    return (
        <Category
            name="Tendencias"
            options={trends}
        />
    )
}

const useNearScreen = ({distance =  '100px'} = {}) => {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef()

    useEffect(() => {
        let observer

        const onChange = (entries, observer) => {
            const el = entries[0];
            console.log(el.isIntersecting)
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect();
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            observer.observe(fromRef.current);
        })


        return () => observer && observer.disconnect();
    })

    return {isNearScreen, fromRef}
}

export const LazyTrending = () => {
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return (
        <div ref={fromRef}>
            {
                isNearScreen ? <TrendingSearches /> : null
            }
        </div>
    )
}
