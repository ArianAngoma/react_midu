import {memo} from "react";
import {Link} from "wouter";
import './styles.css'

import Fav from "components/Fav";

const Gif = ({title, id, url}) => {
    return (
        <div className="Gif">

            <div className="Gif-buttons">
                <Fav id={id}/>
            </div>

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
