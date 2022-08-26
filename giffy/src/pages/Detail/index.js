import {Gif} from "../../components/Gif";
import {useGlobalGifs} from "../../hooks/useGlobalGifs";

export const Detail = ({params}) => {
    const gifs = useGlobalGifs()

    const gif = gifs.find(gif => gif.id === params.id);

    console.log(gif)

    return (
        <>
            <h3 className="App-title">{gif.title}</h3>
            <Gif id={gif.id} url={gif.url} title={gif.title}/>
        </>
    )
}
