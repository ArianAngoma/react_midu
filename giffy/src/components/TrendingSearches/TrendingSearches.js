import {useEffect, useState} from "react";
import {getTrendingTermsService} from "../../services/getTrendingTermsService";
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
export default TrendingSearches;

