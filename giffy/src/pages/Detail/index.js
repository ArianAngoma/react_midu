
import {Gif} from "../../components/Gif/Gif";
import {useGlobalGifs} from "../../hooks/useGlobalGifs";

export const Detail = ({params}) => {
    const gifs = useGlobalGifs()

    const gif = gifs.find(gif => gif.id === params.id);

    console.log(gif)

    return (
        <Gif id={gif.id} url={gif.url} title={gif.title}/>
    )
}
