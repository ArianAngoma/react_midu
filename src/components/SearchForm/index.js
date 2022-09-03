import {memo, useState} from "react";

import css from "./styles.module.css"

function SearchForm({onSubmit}) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({keyword});
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
