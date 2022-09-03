import {memo, useState} from "react";
import {useLocation} from "wouter";

import css from "./styles.module.css";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({initialKeyword = '', initialRating = 'g'}) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
    const [rating, setRating] = useState(initialRating);
    const [times, setTimes] = useState(0);

    const [path, pushLocation] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        pushLocation(`/search/${keyword || 'giphy'}/${rating}`);
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
        setTimes(times + 1)
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>

            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search..."
                className={css["c-search-input"]}
            />

            <select className={css["c-search-list"]} value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {
                    RATINGS.map(rating => (
                        <option key={rating}>{rating}</option>
                    ))
                }
            </select>

            <small>
                {times}
            </small>

        </form>
    )
}

export default memo(SearchForm);
