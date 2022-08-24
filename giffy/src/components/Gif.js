import './Gif.css'

export const Gif = ({title, id, url}) => {
    return (
        <a className="gif" href={`#${id}`}>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </a>
    )
}
