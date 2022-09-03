import {memo} from "react";
import './styles.css'

import Gif from "../Gif";

function ListOfGifs({gifs}) {
    return (
        <div className="ListOfGifs">
            {
                gifs.map(({id, title, url, ...restOfGif}) => <Gif
                    key={url}
                    id={id}
                    title={title}
                    url={url}
                    extraInfo={restOfGif}
                />)

            }
        </div>
    )

}

export default memo(ListOfGifs)
