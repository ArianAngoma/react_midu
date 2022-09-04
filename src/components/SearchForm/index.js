import {memo} from "react";
import {useLocation} from "wouter";

import css from "./styles.module.css";

import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({initialKeyword = '', initialRating = 'g'}) {

    const {keyword, rating, updateKeyword, updateRating} = useForm({initialKeyword, initialRating})

    const [, pushLocation] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        pushLocation(`/search/${keyword || 'giphy'}/${rating}`);
    }

    const handleChange = (event) => {
        updateKeyword(event.target.value);
    }

    const handleChangeRating = (event) => {
        updateRating(event.target.value);
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

        </form>
    )
}

export default memo(SearchForm);
