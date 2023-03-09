import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // data user untuk auth 
    const [auth, setAuth] = useState({})
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
        {/* there are component which is nested in */}
        {children}
     </AuthContext.Provider>
    )
}

export default AuthContext;
// Go to index to provide, provide context for the full app