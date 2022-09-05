import {useState} from "react";
import './styles.css'

import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";


export default function Fav({id}) {
    const {isLogged, addFav, favs} = useUser()

    const [showModal, setShowModal] = useState(false)

    const isFaved = favs.some(favId => favId === id)

    const handleFav = () => {
        if (!isLogged) return setShowModal(true)

        addFav({id})
    }

    const handleClose = () => setShowModal(false)

    const [label, emoji] = isFaved ? ['Remove fav', '❤'] : ['Add fav', '🤍️']

    return (
        <>
            <button
                onClick={handleFav}
                className="gf-Fav"
            >
                <span role="img" aria-label={label}>{emoji}</span>
            </button>

            {
                showModal && (
                    <Modal onClose={handleClose}>
                        <Login/>
                    </Modal>
                )
            }
        </>
    )
}
