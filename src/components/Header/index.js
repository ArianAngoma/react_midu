import {Link, useRoute} from "wouter";

import './styles.css'

import useUser from "hooks/useUser";

export default function Header() {
    const {isLogged, logout} = useUser();

    const [match] = useRoute('/login');

    const handleLogout = () => {
        logout()
    }

    const renderLoginButtons = ({isLogged}) => {
        return isLogged ?
            <button onClick={handleLogout}>Logout</button> :
            <Link to="/login">Login</Link>
    }

    const content = match ? null : renderLoginButtons({isLogged})

    return (
        <header className="gf-header">

            {content}

        </header>
    )
}
