import {memo} from "react";
import {useState} from "react";

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
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>

            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search..."
            />

        </form>
    )
}

export default memo(SearchForm);
