import {useEffect, useState} from "react";
import {useLocation} from "wouter";
import useUser from "../../hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigate] = useLocation();

    const {login, isLogged, isLoginLoading, hasLoginError} = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();

        login({username, password})
    }

    if (isLoginLoading) return <p>Loading...</p>

    return (
        <>
            <h2>Login</h2>

            {
                isLoginLoading && <strong>Checking credentials...</strong>
            }

            {
                !isLoginLoading && (
                    <form onSubmit={handleSubmit}>

                        <input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button>Login</button>

                    </form>
                )
            }

            {
                hasLoginError && <strong>Invalid credentials</strong>
            }

        </>
    )
}
