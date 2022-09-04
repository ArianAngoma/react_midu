import {Link} from "wouter";

import './styles.css'

import useUser from "hooks/useUser";

export default function Header() {
    const {isLogged, logout} = useUser();

    const handleLogout = () => {
        logout()
    }

    return (
        <header className="gf-header">

            {

                isLogged ?
                    <button onClick={handleLogout}>Logout</button> :
                    <Link to="/login">Login</Link>

            }

        </header>
    )
}
