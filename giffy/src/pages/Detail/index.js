import {useContext} from "react";
import {GifsContext} from "../../context/GifsContext";
import {Gif} from "../../components/Gif/Gif";

export const Detail = ({params}) => {
    const {gifs} = useContext(GifsContext)

    const gif = gifs.find(gif => gif.id === params.id);

    console.log(gif)

    return (
        <Gif id={gif.id} url={gif.url} title={gif.title}/>
    )
}
