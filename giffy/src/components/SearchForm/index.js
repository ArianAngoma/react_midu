import {useState} from "react";

export function SearchForm({onSubmit}) {
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
