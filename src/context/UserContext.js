import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [jwt, setJwt] = useState(() => sessionStorage.getItem("jwt"));


    return (
        <UserContext.Provider value={{
            jwt, setJwt
        }}>
            {children}
        </UserContext.Provider>
    )
}
