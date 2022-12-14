import {Link} from "wouter";

import "./styles.css";

export const Category =({ name, options = [] }) => {
    return (
        <div className='Category'>
            <h3 className="Category-title">{name}</h3>
            <ul className="Category-list">
                {options.map((singleOption) => (
                    <li key={singleOption} className="Category-list-item">
                        <Link className="Category-link" to={`/search/${singleOption}`}>
                            {singleOption}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
