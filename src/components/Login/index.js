import {useEffect, useState} from "react";
import {useLocation} from "wouter";

import './styles.css';

import useUser from "hooks/useUser";

export default function Login({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigate] = useLocation();

    const {login, isLogged, isLoginLoading, hasLoginError} = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (event) => {
        event.preventDefault();

        login({username, password})
    }

    if (isLoginLoading) return <p>Loading...</p>

    return (
        <>

            {
                isLoginLoading && <strong>Checking credentials...</strong>
            }

            {
                !isLoginLoading && (
                    <form
                        onSubmit={handleSubmit}
                        className="form"
                    >

                        <label>
                            username

                            <input
                                placeholder="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </label>

                        <label>
                            password

                            <input
                                placeholder="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>



                        <button className="btn">Login</button>

                    </form>
                )
            }

            {
                hasLoginError && <strong>Invalid credentials</strong>
            }

        </>
    )
}
