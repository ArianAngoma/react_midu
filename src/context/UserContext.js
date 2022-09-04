import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [jwt, setJwt] = useState([])

    return (
        <UserContext.Provider value={{
            jwt, setJwt
        }}>
            {children}
        </UserContext.Provider>
    )
}
