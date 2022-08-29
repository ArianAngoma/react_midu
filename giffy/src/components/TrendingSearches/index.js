import {useEffect, useState} from "react";
import {getTrendingTermsService} from "services/getTrendingTermsService";
import {Category} from "../Category";
import {useNearScreen} from "hooks/useNearScreen";

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
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return (
        <div ref={fromRef}>
            {
                isNearScreen ? <TrendingSearches /> : null
            }
        </div>
    )
}
