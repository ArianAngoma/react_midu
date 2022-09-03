import {memo, useState} from "react";
import {useLocation} from "wouter";

import css from "./styles.module.css"

function SearchForm() {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        pushLocation(`/search/${keyword}`);
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
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

        </form>
    )
}

export default memo(SearchForm);
