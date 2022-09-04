import useUser from "hooks/useUser";
import {useLocation} from "wouter";
import './styles.css'

export default function Fav({id}) {
    const {isLogged} = useUser()

    const [, navigate] = useLocation()

    const handleFav = () => {
        if (!isLogged) return navigate('/login')

        alert(id)
    }

    return (
        <button
            onClick={handleFav}
            className="gf-Fav"
        >
            <span role="img" aria-label="Fav Gif">👍</span>
        </button>
    )
}
