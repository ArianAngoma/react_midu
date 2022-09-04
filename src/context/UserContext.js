import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [favs, setFavs] = useState(() => JSON.parse(localStorage.getItem("favs")) || []);

    const [jwt, setJwt] = useState(() => sessionStorage.getItem("jwt"));

    return (
        <UserContext.Provider value={{
            jwt, setJwt, favs, setFavs
        }}>
            {children}
        </UserContext.Provider>
    )
}
