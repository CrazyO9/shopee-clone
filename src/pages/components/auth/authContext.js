import React, { createContext, useState } from "react";

const defaultContextValue = {
    isAuthenticated: false,
    Username: "愛的窩窩頭",
}

const AuthContext = createContext({defaultContextValue})

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated,
    );
    const [Username, setUsername] = useState(
        defaultContextValue.Username,
    );
    return <AuthContext.Provider
        value={{
            isAuthenticated,
            setIsAuthenticated,
            Username,
            setUsername,
        }}
    >
        {children}
    </AuthContext.Provider>;
}
export default AuthContext;