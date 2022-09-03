import {lazy, Suspense} from "react";
import {useNearScreen} from "hooks/useNearScreen";
import {Spinner} from "components/Spinner";

const TrendingSearches = lazy(() => import('./TrendingSearches'));

export const LazyTrending = () => {
    const {isNearScreen, fromRef} = useNearScreen({distance: '0px'})

    return (
        <div ref={fromRef}>
            <Suspense fallback={<Spinner/>}>
                {
                    isNearScreen ? <TrendingSearches/> : <Spinner/>
                }
            </Suspense>
        </div>
    )
}
