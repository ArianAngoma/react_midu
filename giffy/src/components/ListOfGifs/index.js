import './styles.css'

import Gif from "../Gif";

export const ListOfGifs = ({gifs}) => {
    return (
        <div className="ListOfGifs">
            {
                gifs.map(({id, title, url, ...restOfGif}) => <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                    extraInfo={restOfGif}
                />)

            }
        </div>
    )

}
