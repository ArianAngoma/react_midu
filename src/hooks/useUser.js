import {useCallback, useContext, useState} from "react";

import {UserContext} from "context/UserContext";
import loginService from "services/login.js";

export default function useUser() {
    const {jwt, setJwt} = useContext(UserContext);

    const [stateLogin, setStateLogin] = useState({
        loading: false,
        error: false
    });

    const login = useCallback(({username, password}) => {

        setStateLogin({loading: true, error: false});

        loginService({username, password})
            .then((jwt) => {
                sessionStorage.setItem("jwt", jwt);
                setJwt(jwt)
                setStateLogin({loading: false, error: false});
            })
            .catch((error) => {
                console.log(error);
                sessionStorage.removeItem("jwt");
                setStateLogin({loading: false, error: true});
            })
    }, [setJwt]);

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt]);

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: stateLogin.loading,
        hasLoginError: stateLogin.error,
        login,
        logout
    }
}
