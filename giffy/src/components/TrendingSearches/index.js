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

export const LazyTrending = () => {
    const [show, setShow] = useState(false);

    const elementRef = useRef();

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
                rootMargin: '100px'
            })

            observer.observe(elementRef.current);
        })


        return () => observer && observer.disconnect();
    })

    return (
        <div ref={elementRef}>
            {
                show ? <TrendingSearches /> : null
            }
        </div>
    )
}
