import {memo} from "react";
import {Link} from "wouter";
import './styles.css'

const Gif = ({title, id, url}) => {
    return (
        <div className="Gif">
            <Link
                to={`/gif/${id}`}
                className="Gif-link"
            >

                <h4>{title}</h4>
                <img src={url} alt={title} loading="lazy"/>

            </Link>
        </div>
    )
}

export default memo(Gif, (prevProps, nextProps) => {
    return prevProps.url === nextProps.url
})
