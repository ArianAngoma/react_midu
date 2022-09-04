import useUser from "hooks/useUser";
import {useLocation} from "wouter";
import './styles.css'

export default function Fav({id}) {
    const {isLogged, addFav, favs} = useUser()

    const [, navigate] = useLocation()

    const isFaved = favs.some(favId => favId === id)

    const handleFav = () => {
        if (!isLogged) return navigate('/login')

        addFav({id})
    }

    const [label, emoji] = isFaved ? ['Remove fav', '❤'] : ['Add fav', '🤍️']

    return (
        <button
            onClick={handleFav}
            className="gf-Fav"
        >
            <span role="img" aria-label={label}>{emoji}</span>
        </button>
    )
}
