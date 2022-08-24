import './styles.css'

import {Gif} from "../Gif/Gif";

export const ListOfGifs = ({gifs}) => {
    return (
        <div className="ListOfGifs">
            {
                gifs.map(({id, title, url}) => <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />)

            }
        </div>
    )

}
