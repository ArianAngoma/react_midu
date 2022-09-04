import {memo, useReducer} from "react";
import {useLocation} from "wouter";

import css from "./styles.module.css";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }

        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }

        default:
            return state
    }
}

function SearchForm({initialKeyword = '', initialRating = 'g'}) {

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0,
    })

    const {keyword, times, rating} = state

    const [, pushLocation] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        pushLocation(`/search/${keyword || 'giphy'}/${rating}`);
    }

    const handleChange = (event) => {
        dispatch({
            type: ACTIONS.UPDATE_KEYWORD,
            payload: event.target.value,
        });
    }

    const handleChangeRating = (event) => {
        dispatch({
            type: ACTIONS.UPDATE_RATING,
            payload: event.target.value,
        })
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
