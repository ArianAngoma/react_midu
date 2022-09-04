import {useState} from "react";
import {useLocation} from "wouter";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigate] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/');
    }

    return (
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
