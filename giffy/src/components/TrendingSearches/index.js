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
        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting) setShow(true);
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('LazyTrending'))
    })

    return (
        <div id="LazyTrending">
            {
                show ? <TrendingSearches /> : null
            }
        </div>
    )
}
