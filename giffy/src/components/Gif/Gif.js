import {Link} from "wouter";
import './styles.css'

export const Gif = ({title, id, url}) => {
    return (
        <div className="Gif">
            <Link
                to={`/gif/${id}`}
                className="Gif-link"
            >

                <h4>{title}</h4>
                <img src={url} alt={title}/>

            </Link>
        </div>
    )
}
