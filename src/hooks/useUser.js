import {useCallback, useContext, useState} from "react";

import {UserContext} from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {
    const {jwt, setJwt, setFavs, favs} = useContext(UserContext);

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

    const addFav = useCallback(({id}) => {
        addFavService({id})
            .then((favs) => {
                setFavs(favs);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [setFavs])

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt]);

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: stateLogin.loading,
        hasLoginError: stateLogin.error,
        login,
        logout,
        addFav,
        favs
    }
}
