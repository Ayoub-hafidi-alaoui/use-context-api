
import React, {createContext} from 'react'

const AuthContext=createContext({})

function AuthProvider({children}) {
    //sign in 
    //sign out 
    //Listener for anthenetification state

    return (
        <AuthContext.Provider value={{user:null}}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider
